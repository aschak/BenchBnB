# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.bounded?(bounds, bench)

    lat_max, lng_max, lat_min, lng_min =
      bounds[0].to_f, bounds[1].to_f, bounds[2].to_f, bounds[3].to_f

    lat, lng = bench.lat, bench.lng

    if lat > lat_min && lat < lat_max
      if lng > lng_min && lng < lng_max
        return true
      end
    end

    return false
  end
end
