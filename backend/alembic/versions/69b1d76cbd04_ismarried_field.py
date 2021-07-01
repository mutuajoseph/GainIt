"""ismarried field

Revision ID: 69b1d76cbd04
Revises: 2aa12b82ba6b
Create Date: 2021-06-30 11:37:13.226128

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '69b1d76cbd04'
down_revision = '2aa12b82ba6b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('members', sa.Column('is_married', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('members', 'is_married')
    # ### end Alembic commands ###