"""adds users auth

Revision ID: 422382df587f
Revises: e92618ba79e3
Create Date: 2024-03-27 11:28:20.407157

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '422382df587f'
down_revision = 'e92618ba79e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('auth_users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('_password_hash', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('auth_users')
    # ### end Alembic commands ###
