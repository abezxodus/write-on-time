class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true

  has_many :projects
  has_many :assignments, through: :projects

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

