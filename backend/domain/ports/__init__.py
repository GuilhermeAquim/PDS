from domain.ports.auth_repository import AuthRepository, AuthenticationError
from domain.ports.user_repository import UserRepository, UserAlreadyExists
from domain.ports.item_repository import ItemRepository, ItemNotFound
from domain.ports.proposal_repository import ProposalRepository, ProposalNotFound
from domain.ports.sale_repository import SaleRepository, UserNotExists, ItemNotExists