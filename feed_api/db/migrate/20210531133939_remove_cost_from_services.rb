class RemoveCostFromServices < ActiveRecord::Migration[6.1]
  def change
    remove_column :services, :cost, :integer
  end
end
