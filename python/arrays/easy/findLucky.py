import collections
class Solution:
    def findLucky(self, arr: List[int]) -> int:
      largest = -1
      map = Counter(arr)
      for key, val in map.items():
        if (key == val):
          largest = max(key, largest)

      return largest


