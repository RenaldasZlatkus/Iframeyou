class User < ActiveRecord::Base
	has_many :settings
	has_many :websites
end
