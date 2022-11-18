class Project < ApplicationRecord
  validates :name, presence: true

  has_many :assignments
  belongs_to :user
end