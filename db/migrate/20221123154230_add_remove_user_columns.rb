class AddRemoveUserColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :streak_count, :integer

    add_column :users, :streak_count, :integer, null: false, default: 0
    add_column :users, :total_projects, :integer, null: false, default: 0
    add_column :users, :total_assignments, :integer, null: false, default: 0
    add_column :users, :total_on_time, :integer, null: false, default: 0
    add_column :users, :total_late, :integer, null: false, default: 0
    add_column :users, :word_count, :integer, null: false, default: 0
    add_column :users, :page_count, :integer, null: false, default: 0
  end
end