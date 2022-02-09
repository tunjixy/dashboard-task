<template>
  <div>
    <div class="container">
      <div class="bg-white border border-border-nav rounded-lg">
        <div class="table-wrapper">
          <table class="table">
            <thead>
              <tr>
                <th class="table-head">
                  <div class="flex items-center">
                    <checkbox-base-icon class="mr-3" />
                    <div class="flex items-center">
                      Company
                      <down-icon class="ml-[7px]" />
                    </div>
                  </div>
                </th>
                <th
                  class="table-head"
                  v-for="(title, index) in headings"
                  :key="index"
                >
                  {{ title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(list, index) in lists" :key="index" class="table-row">
                <td class="table-item">
                  <div class="flex items-center">
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-md stroke-current"
                        :checked="list.checked"
                      />
                      <span class="ml-3 flex items-center">
                        <img
                          :src="require(`@/assets/images/${list.logo}.png`)"
                          :alt="list.companyName"
                        />
                        <div class="ml-3">
                          <h2 class="text-sm font-medium">
                            {{ list.companyName }}
                          </h2>
                          <p class="text-sm text-light-text mt-1">
                            {{ list.companyUrl }}
                          </p>
                        </div>
                      </span>
                    </label>
                  </div>
                </td>
                <td class="table-item">
                  <div class="bg-[#F9F5FF] h-2 w-full rounded">
                    <div
                      :style="`width: ${list.license}%`"
                      class="bg-primary h-2 rounded"
                    />
                  </div>
                </td>
                <td class="table-item">
                  <span
                    :class="[
                      list.status === 'customer'
                        ? 'bg-[#ECFDF3] text-[#027A48]'
                        : 'bg-[#F2F4F7] text-[#344054]',
                    ]"
                    class="rounded-2xl text-xs py-[2px] px-2 capitalize"
                  >
                    {{ list.status }}
                  </span>
                </td>
                <td class="table-item">
                  <div>
                    <ul class="flex items-center">
                      <li
                        v-for="(user, index) in list.users"
                        :key="index"
                        class="-ml-2"
                      >
                        <div class="h-6 w-6 rounded-full">
                          <img
                            :src="user"
                            alt="Image of user"
                            class="h-6 w-6 rounded-full border-2 border-white object-cover object-top"
                          />
                        </div>
                      </li>
                      <li v-if="list.count" class="-ml-2">
                        <div
                          class="h-6 w-6 rounded-full bg-[#F9F5FF] text-xs font-medium text-primary border-2 border-white flex items-center justify-center"
                        >
                          {{ list.count }}
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
                <td class="table-item">
                  <div>
                    <h2 class="text-sm font-medium">{{ list.about.title }}</h2>
                    <p class="text-sm text-light-text mt-1">
                      {{ list.about.description }}
                    </p>
                  </div>
                </td>
                <td class="table-item">
                  <div class="flex items-center">
                    <delete-icon class="mr-7" />
                    <edit-icon />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ui-pagination />
      </div>
    </div>
  </div>
</template>

<script>
import EditIcon from '@/assets/icons/edit.svg?inline'
import DeleteIcon from '@/assets/icons/delete.svg?inline'
import DownIcon from '@/assets/icons/down.svg?inline'
import CheckboxBaseIcon from '@/assets/icons/checkbox-base.svg?inline'

export default {
  components: { EditIcon, DeleteIcon, DownIcon, CheckboxBaseIcon },
  data() {
    return {
      headings: ['License use', 'Status', 'Users', 'About', ''],
      lists: [
        {
          logo: 'catalog',
          companyName: 'Catalog',
          companyUrl: 'catalogapp.io',
          license: 80,
          status: 'customer',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+5',
          about: {
            title: 'Content curating app',
            description: 'Brings all your news into one place',
          },
          checked: true,
        },
        {
          logo: 'circooles',
          companyName: 'Circooles',
          companyUrl: 'getcirooles.com',
          license: 60,
          status: 'Churned',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+8',
          about: {
            title: 'Design software',
            description: 'Super lightweight design app',
          },
          checked: true,
        },
        {
          logo: 'command',
          companyName: 'Command+R',
          companyUrl: 'cmdr.ai',
          license: 40,
          status: 'customer',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+2',
          about: {
            title: 'Data prediction',
            description: 'AI and machine learning data',
          },
          checked: true,
        },
        {
          logo: 'hourglass',
          companyName: 'Hourglass',
          companyUrl: 'hourglass.app',
          license: 80,
          status: 'customer',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '',
          about: {
            title: 'Productivity app',
            description: 'Time management and productivity',
          },
          checked: false,
        },
        {
          logo: 'layers',
          companyName: 'Layers',
          companyUrl: 'getlayers.io',
          license: 30,
          status: 'Churned',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+1',
          about: {
            title: 'Web app integrations',
            description: 'Connect web apps seamlessly',
          },
          checked: false,
        },
        {
          logo: 'quotient',
          companyName: 'Quotient',
          companyUrl: 'quotient.co',
          license: 20,
          status: 'customer',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+6',
          about: {
            title: 'Sales CRM',
            description: 'Web-based sales doc management',
          },
          checked: true,
        },
        {
          logo: 'sisyphus',
          companyName: 'Sisyphus',
          companyUrl: 'sisyphus.com',
          license: 50,
          status: 'customer',
          users: [
            'https://images.pexels.com/photos/6877351/pexels-photo-6877351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9811701/pexels-photo-9811701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/7148418/pexels-photo-7148418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/5608721/pexels-photo-5608721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/9402417/pexels-photo-9402417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          ],
          count: '+4',
          about: {
            title: 'Automation and workflow',
            description: 'Time tracking, invoicing and expenses',
          },
          checked: true,
        },
      ],
    }
  },
}
</script>
