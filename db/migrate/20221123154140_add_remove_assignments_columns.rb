class AddRemoveAssignmentsColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :assignments, :due_date, :datetime, null: false, default: -> { 'CURRENT_TIMESTAMP' }
    remove_column :assignments, :edit, :string, default: ""

    add_column :assignments, :due_date, :date, null: false, default: -> { 'CURRENT_TIMESTAMP' }
    add_column :assignments, :google_calendar, :boolean, null: false, default: false
  end
end