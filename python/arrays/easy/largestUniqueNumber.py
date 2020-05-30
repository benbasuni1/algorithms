class Solution:
    def largestUniqueNumber(self, A: List[int]) -> int:
      if not A:
        return false

      map = {}
      largest = -1

      for i in A:
        if i in map:
          map[i] += 1
        else:
          map[i] = 1

      for key, val in map.items():
        if val == 1:
          largest = max(key, largest)

      return largest


