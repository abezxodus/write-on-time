class Assignment < ApplicationRecord
  validates :assignment_name, presence: true
  validates :due_date, presence: true

  belongs_to :project
end
