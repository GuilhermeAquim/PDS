import datetime
import unittest
import tests.setup_test
from adapter.auth_repository_jwt import AuthRepositoryJwt, UserNotFoundError, AuthenticationError
from unittest.mock import MagicMock, Mock, patch

class FakeDatetime:
    RETURN = datetime.datetime(1999, 1, 1)
    @classmethod
    def now(self, **kwargs):
        return self.RETURN

class TestAuthRepositoryJwt(unittest.TestCase):
    def test_user_not_exist(self):
        user_rep_mock = Mock()
        user_rep_mock.get_user_by_login = Mock(side_effect=UserNotFoundError())
        auth = AuthRepositoryJwt(user_rep=user_rep_mock)

        self.assertRaises(
            AuthenticationError,
            auth.login,
            login='foo',
            password='bar'
        )

    def test_validate_token(self):
        user_rep_mock = Mock()
        auth = AuthRepositoryJwt(user_rep=user_rep_mock)
        token = auth._create_token(user_id=10)

        self.assertIsInstance(
            auth.validate_token(token),
            dict
        )

    def test_invalid_token(self):
        user_rep_mock = Mock()
        auth = AuthRepositoryJwt(user_rep=user_rep_mock)
        token = auth._create_token(user_id=10)

        self.assertRaises(
            Exception,
            auth.validate_token,
            token=token[::-5]
        )