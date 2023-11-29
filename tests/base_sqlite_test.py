import tests.setup_test

from unittest.mock import MagicMock, Mock
from unittest.mock import patch
import sqlite3
from adapter.base_sqlite import BaseSQLite

class TestBaseSQLite:

    @patch('sqlite3.connect')
    def test_file_connect(self, mock_class):

        base = BaseSQLite('db.db')
        base.select_data(query="SELECT * FROM table", args=tuple())
        mock_class.assert_called_once_with('db.db')

    @patch('sqlite3.connect')
    @patch('sqlite3.Cursor')
    def test_fetchone_on_select(self,fetch_one_mock, conn_mock):
        base = BaseSQLite('db.db')
        conn_mock.return_value = MagicMock(return_value=fetch_one_mock)
        base.select_data(query="SELECT * FROM table", args=tuple(), fetchone=True)
        fetch_one_mock.fetchone.assert_called