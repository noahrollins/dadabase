class AddKidIdAndDadIdToPerson < ActiveRecord::Migration[7.0]
  def change
    add_column :people, :kid_id, :bigint
    add_column :people, :dad_id, :bigint
  end
end