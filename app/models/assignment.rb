class Assignment < ApplicationRecord
  validates :name, presence: true
  validates :due_date, presence: true
  # validate :due_date_is_in_the_future

  belongs_to :project

  # private

  # def due_date_is_in_the_future
  #   if(due_date < Date.today)
  #     errors.add(:due_date, 'cannot be in the past')
  #   end
  # end
  # Removed because it prevents editing assignments after the due date.
end