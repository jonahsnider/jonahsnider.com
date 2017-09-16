# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jonahsnidersite"
  spec.version       = "1.0"
  spec.authors       = ["Jonah Snider"]
  spec.email         = ["me@jonahsnider.ninja"]

  spec.summary       = %q{My website}
  spec.homepage      = "https://gitlab.com/andrewbanchich/forty-jekyll-theme"
  spec.license       = "Apache 2.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
end
