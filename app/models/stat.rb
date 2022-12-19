class Stat < ApplicationRecord
  belongs_to :user

  has_many :badges
  has_many :timelines
end