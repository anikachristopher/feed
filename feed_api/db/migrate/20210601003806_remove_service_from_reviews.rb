class RemoveServiceFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :service, :string
  end
end
