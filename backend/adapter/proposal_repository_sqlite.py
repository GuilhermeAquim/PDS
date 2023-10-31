from domain.ports.proposal_repository import ProposalRepository
from adapter.base_sqlite import BaseSQLite


class ProposalRepositorySQLite(BaseSQLite, ProposalRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)