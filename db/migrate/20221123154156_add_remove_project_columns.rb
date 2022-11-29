class AddRemoveProjectColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :closeable, :boolean, default: true
    
    remove_column :projects, :edit, :string, default: ""
  end
end