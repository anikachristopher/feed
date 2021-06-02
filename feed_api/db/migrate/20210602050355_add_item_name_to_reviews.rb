class AddItemNameToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :item_name, :string
  end
end
