class Statistics < ActiveRecord::Migration[5.2]
  def change
    create_table :statistics do |t|
      t.integer :total_projects, null: false, default: 0
      t.integer :open_projects, null: false, default: 0
      t.integer :closed_projects, null: false, default: 0
      t.integer :total_assignments, null: false, default: 0
      t.integer :total_open_assignments, null: false, default: 0
      t.integer :open_assignments, null: false, default: 0
      t.integer :open_past_due_assignments, null: false, default: 0
      t.integer :total_closed_assignments, null: false, default: 0
      t.integer :closed_assignments, null: false, default: 0
      t.integer :closed_late_assignments, null: false, default: 0
      t.integer :total_words, null: false, default: 0
      t.integer :total_pages, null: false, default: 0

      t.belongs_to :user

      t.timestamps
    end
  end
end