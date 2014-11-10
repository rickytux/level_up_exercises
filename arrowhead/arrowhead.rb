require 'pry'
require 'pry-nav'
class Arrowhead
  # This seriously belongs in a database.
  CLASSIFICATIONS = {
    far_west: {
      notched: "Archaic Side Notch",
      stemmed: "Archaic Stemmed",
      lanceolate: "Agate Basin",
      bifurcated: "Cody",
    },
    northern_plains: {
      notched: "Besant",
      stemmed: "Archaic Stemmed",
      lanceolate: "Humboldt Constricted Base",
      bifurcated: "Oxbow",
    },
  }

  # FIXME: I don't have time to deal with this.
  def self.classify(region, shape)
    shapes = CLASSIFICATIONS[region]
    arrowhead =  CLASSIFICATIONS[region][shape] if shapes
    # binding.pry
    # # arrowhead = CLASSIFICATIONS[shape]
    # raise "Unknown region, please provide a valid region." unless shapes
    # if arrowhead && shapes
    #   puts "You have a(n) '#{arrowhead}' arrowhead. Probably priceless."
    # else
    #   p "Unknown shape. Are you sure you know what you're talking about?"
    # end
    p "You have a(n) '#{arrowhead}' arrowhead. Probably priceless" if arrowhead
    if shapes && !arrowhead
      raise "Unknown region, please provide a valid region."
    elsif !shapes && !arrowhead
      raise "Unknown shape. Are you sure you know what you're talking about?"
    end
  end
end

puts Arrowhead.classify(:northern_plains, :test)
