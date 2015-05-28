ar = [3, 30, 34, 5, 9]
p ar.sort{|el1, el2| (el2.to_s + el1.to_s) <=> (el1.to_s + el2.to_s)}.join
