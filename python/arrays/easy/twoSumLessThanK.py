class Solution:
    def twoSumLessThanK(self, A: List[int], K: int) -> int:
      A.sort()
      left,right = 0, len(A)-1
      min_target = -1

      while (left < right):
        sum = A[left] + A[right]

        if sum > K:
          right -= 1

        elif sum < K:
          if sum > min_target and sum != K:
            min_target = sum
          left += 1

      return min_target

      """

      result = []

      for num in A:
        for num2 in A:
          if num == num2:
            continue
          else:
            if num + num2 < K:
              result.append(num + num2)

      if len(result) > 0:
        return max(result)
      else:
        return -1
      """




