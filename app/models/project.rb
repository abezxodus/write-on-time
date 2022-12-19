class Project < ApplicationRecord
  validates :name, presence: true

  has_one :projectstat
  has_many :projectbadges, through: :projectstat
  has_many :projectstatstimelines, through: :projectstat

  has_many :assignments

  belongs_to :user
end