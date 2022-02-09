<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-white rounded-lg p-6 shadow-card border border-border-nav"
        >
          <div class="flex items-center justify-between">
            <h2 class="text-base font-medium mr-3">{{ stat.title }}</h2>
            <img src="@/assets/icons/dot.svg?data" alt="Trippe dot icon" />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-3xl md:text-4xl font-semibold mt-6 mr-4">
                {{ stat.amount }}
              </h2>
              <div class="flex items-center mt-4">
                <div
                  v-html="
                    require(`@/assets/icons/${stat.percentageIcon}.svg?raw`)
                  "
                ></div>
                <div class="text-sm md:text-base text-light-text ml-2">
                  <span
                    :class="[
                      stat.status === 'up'
                        ? 'text-[#027A48]'
                        : 'text-[#B42318]',
                    ]"
                    class=""
                    >{{ stat.percentage }}</span
                  >
                  vs last month
                </div>
              </div>
            </div>
            <div
              v-html="require(`@/assets/icons/${stat.chartIcon}.svg?raw`)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        {
          title: 'Total customers',
          amount: '2,420',
          percentage: '40%',
          status: 'up',
          chartIcon: 'chart-green',
          percentageIcon: 'arrow-up',
        },
        {
          title: 'Members',
          amount: '1,210',
          percentage: '10%',
          status: 'down',
          chartIcon: 'chart-red',
          percentageIcon: 'arrow-down',
        },
        {
          title: 'Active now',
          amount: '316',
          percentage: '20%',
          status: 'up',
          chartIcon: 'chart-green',
          percentageIcon: 'arrow-up',
        },
      ],
    }
  },
}
</script>
