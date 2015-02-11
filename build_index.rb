#!/usr/bin/env ruby  

require 'net/http'
require 'cgi'


# Build a file index for all photos on disc, that contains Data Created. 

# Func for fetching URLs. 
def http_get(domain,path,params)
    return Net::HTTP.get(domain, "#{path}?".concat(params.collect { 
    	|k,v| "#{k}=#{CGI::escape(v.to_s)}" 
    }.join('&'))) if not params.nil?
    return Net::HTTP.get(domain, path)
end


if ARGV[0] == false
	# check to make sure a directory has been passed.
    puts "Usage: ruby build_index.rb [BASE DIRECTORY]"
    exit
else

	# Grab the first argument - the bas directory to search
	d = ARGV[0]

	# Build array of JPG Photos
	photos = Dir.glob(d + '/**/*.JPG')
	puts photos.size

	# Walk through the array, fetch data and print.
	count = 0;
	while count < photos.size
		params = {:file => photos[count]}
		result = http_get("localhost", "/yesterday/get_exif.php", params)
		puts "#{count} #{result}" 
		sleep(0.1)
		count += 1
	end

end


