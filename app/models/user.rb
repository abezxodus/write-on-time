class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true

  has_one :stat
  has_many :page_count_timelines, through: :stat
  has_many :word_count_timelines, through: :stat
  has_many :submission_streak_timelines, through: :stat
  has_many :badges, through: :stat

  has_many :projects
  has_many :assignments, through: :projects

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end