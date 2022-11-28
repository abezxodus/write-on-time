class Assignment < ApplicationRecord
  validates :name, presence: true
  validates :due_date, presence: true

  belongs_to :project
end