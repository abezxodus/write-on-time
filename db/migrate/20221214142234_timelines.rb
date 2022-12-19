class Timelines < ActiveRecord::Migration[5.2]
  def change
    create_table :timelines do |t|
      t.integer :year, null: false, default: 0
      t.integer :month, null: false, default: 0
      t.integer :words, null: false, default: 0
      t.integer :pages, null: false, default: 0
      t.integer :assignments, null: false, default: 0
      t.integer :streaks, null: false, default: 0
    
      t.belongs_to :stat

      t.timestamps
    end
  end
end