class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
      k = k % len(nums)

      while k:
        nums.insert(0, nums.pop())
        k -= 1


