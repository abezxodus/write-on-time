class AddRemoveProjectColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :edit, :string, default: ""
  end
end