class AddRemoveUserColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :total_assignments, :integer, null: false, default: 0
    add_column :users, :total_on_time, :integer, null: false, default: 0
    add_column :users, :total_late, :integer, null: false, default: 0
  end
end