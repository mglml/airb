<template>
  <div class="wrapper">
    <el-row class="back">
      <el-row>
        <el-col style="margin-top:15px" :span="24">
          <el-col :span="10">
            <el-col :span="2">
              <div style="margin-top:10px" class="_1uqovkx6">
                <svg
                  viewBox="0 0 1000 1000"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style="height: 1em; width: 1em; display: block; fill: currentcolor;"
                >
                  <path
                    d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
                  />
                </svg>
              </div>
            </el-col>
            <el-col :span="18">
              <el-input placeholder="按城市、地址、地标搜索" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </el-col>
          </el-col>
          <el-col :offset="4" :span="10">
            <el-row>
              <el-col class="header" style="width:130px" :span="3">
                <span class="_cbqpv2">
                  <svg
                    viewBox="0 0 12 12"
                    width="0.8571428571428571em"
                    height="0.8571428571428571em"
                  >
                    <path
                      d="M3.48 3.5c.17-.85.43-1.6.75-2.18A5.02 5.02 0 001.67 3.5zm1.03 0h2.98C7.16 2 6.57 1 6 1S4.84 2 4.5 3.5zm4 0h1.82a5.02 5.02 0 00-2.56-2.18c.32.58.58 1.33.75 2.18zm.16 1a13.82 13.82 0 010 3h2.1a5 5 0 000-3zm-1.01 0H4.34a12.43 12.43 0 000 3h3.32a12.43 12.43 0 000-3zm-4.33 0h-2.1a5 5 0 000 3h2.1a13.82 13.82 0 010-3zm5.19 4a7.5 7.5 0 01-.75 2.18 5.02 5.02 0 002.56-2.18zm-1.03 0H4.51C4.84 10 5.43 11 6 11s1.16-1 1.5-2.5zm-4 0H1.66c.57 1 1.48 1.77 2.56 2.18a7.5 7.5 0 01-.75-2.18zM6 12A6 6 0 116 0a6 6 0 010 12z"
                      fill="currentcolor"
                    />
                  </svg>
                  简体中文 (CN)
                </span>
              </el-col>
              <el-col class="header" :span="3">
                <span class="_cbqpv2">￥ CNY</span>
              </el-col>
              <el-col class="header" :span="2">
                <span class="_cbqpv2">手机端</span>
              </el-col>

              <el-col class="header" :span="3">
                <span class="_cbqpv2">出租房源</span>
              </el-col>
              <el-col class="header" :span="3">
                <span class="_cbqpv2">历史足迹</span>
              </el-col>
              <el-col class="header" :span="2">
                <span class="_cbqpv2">帮助</span>
              </el-col>
              <el-col class="header" :span="2">
                <span @click="cli" class="_cbqpv2">注册</span>
              </el-col>
              <el-col class="header" :span="2">
                <span @click="cli" class="_cbqpv2">登录</span>
              </el-col>
            </el-row>
          </el-col>
        </el-col>
      </el-row>

      <el-row>
        <div
          style="color:#fff;font-size:30px;font-weight:bold;text-align:left;margin-left: 23%;margin-top: 8%;"
        >
          <div>
            <span>去近郊 凉一夏</span>
          </div>
          <div style="margin-top:15px">
            <el-button style="color:#fff;background:#19666e">查看避暑房源</el-button>
          </div>
        </div>
      </el-row>
      <el-row>
        <el-col :offset="4" :span="4">
          <el-select class="select" style="width:44%" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col style="margin-left: -233px;" :span="8">
          <el-input
            class="select"
            placeholder="输入目的地、城市或景点"
            prefix-icon="el-icon-location"
            v-model="address"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <div class="block select">
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="-"
              start-placeholder="入住日期"
              end-placeholder="退房日期"
            ></el-date-picker>
          </div>
        </el-col>
        <el-col :span="2">
          <div>
            <el-button
              class="select"
              style="margin-top:124px;margin-left:-76% !important"
              type="danger"
            >搜索</el-button>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-col :offset="6" :span="15" style="margin-left:22.8%;margin-top:20px;text-align:left">
        <el-row>
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>短途暑期特惠</span>
            </div>
          </el-row>
          <el-row>
            <div style="font-size:12px;margin-top:10px;margin-left:10px">
              <span>短途房源贴心推荐，低至7折</span>
            </div>
          </el-row>

          <el-row style="margin-top:15px">
            <el-radio-group v-model="tehui">
              <el-radio-button border label="广州"></el-radio-button>
              <el-radio-button border label="深圳"></el-radio-button>
              <el-radio-button label="佛山"></el-radio-button>
              <el-radio-button label="成都"></el-radio-button>
              <el-radio-button label="厦门"></el-radio-button>

              <el-radio-button label="上海"></el-radio-button>

              <el-radio-button label="重庆"></el-radio-button>
            </el-radio-group>
          </el-row>
          <el-row >
            <el-row>
              <el-col v-for="(item,index) in tehuiinfo.guangzhou" :key="index" :span="8">
                <el-row style="padding:10px">
                  <img style="height:220px;width:378px" :src="item.img" alt />
                </el-row>
                <el-row style="color:#572533;padding-left:10px;font-weight:bold;font-size:12px">
                  <span>{{item.smalltitle}}</span>
                </el-row>
                <el-row class="house-title">
                  <span>{{item.title}}</span>
                </el-row>
                <el-row>
                  <el-col :span="4">
                    <el-row class="house-title">
                      <span>￥{{item.price}}</span>
                    </el-row>
                  </el-col>
                  <el-col :span="10">
                    <el-row style="margin-top:10px;margin-left:2px;font-size:12px">
                      <span style="text-decoration:line-through">￥{{item.unprice}}</span>
                      <span>每晚</span>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">
                    <xx style="margin-left:10px" :value="item.jibie"></xx>
                  </el-col>
                  <el-col style="font-size:12px;margin-top:4px" :span="12">
                    <span>{{item.jibieinfo}}</span>
                    <span>{{item.fangdong}}</span>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-row
              style="font-size:15px;color:#006c70;font-weight:bold;margin-top:10px;padding-left:10px"
            >
              <span>查看更多{{tehui}}房源></span>
            </el-row>
          </el-row>
        </el-row>

        <el-row style="margin-top:30px">
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>热门目的地</span>
            </div>
          </el-row>
          <el-row></el-row>

          <el-row style="margin-top:15px">
            <el-radio-group v-model="remen">
              <el-radio-button border label="成都"></el-radio-button>
              <el-radio-button border label="重庆"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="杭州"></el-radio-button>
              <el-radio-button label="台北"></el-radio-button>

              <el-radio-button label="首尔"></el-radio-button>

              <el-radio-button label="洛杉矶"></el-radio-button>
              <el-radio-button label="巴黎"></el-radio-button>
            </el-radio-group>
          </el-row>
          <el-row>
            <el-row>
              <el-col v-for="(item,index) in remeninfo.chengdu" :key="index" :span="8">
                <el-row style="padding:10px">
                  <img style="height:220px;width:378px" :src="item.img" alt />
                </el-row>
                <el-row style="color:#572533;padding-left:10px;font-weight:bold;font-size:12px">
                  <span>{{item.smalltitle}}</span>
                </el-row>
                <el-row class="house-title">
                  <span>{{item.title}}</span>
                </el-row>
                <el-row>
                  <el-col :span="4">
                    <el-row class="house-title">
                      <span>￥{{item.price}}</span>
                    </el-row>
                  </el-col>
                  <el-col :span="10">
                    <el-row style="margin-top:10px;margin-left:2px;font-size:12px">
                      <span style="text-decoration:line-through">￥{{item.unprice}}</span>
                      <span>每晚</span>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="5">
                    <xx style="margin-left:10px" :value="item.jibie"></xx>
                  </el-col>
                  <el-col style="font-size:12px;margin-top:4px" :span="12">
                    <span>{{item.jibieinfo}}</span>
                    <span>{{item.fangdong}}</span>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>

            <el-row
              style="font-size:15px;color:#006c70;font-weight:bold;margin-top:10px;padding-left:10px"
            >
              <span>查看更多{{remen}}房源></span>
            </el-row>
          </el-row>
        </el-row>

        <el-row style="margin-top:30px">
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>爱彼迎旅行保障</span>
            </div>
          </el-row>
          <el-row style="margin-left:10px;margin-top:17px">
            <el-col :span="8">
              <el-col :span="4">
                <div
                  class="_1h6n1zu"
                  role="img"
                  aria-busy="false"
                  aria-label="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg"
                  style="display: inline-block; vertical-align: bottom; height: 50px; width: 50px; min-height: 1px;"
                >
                  <img
                    class="_9ofhsl"
                    aria-hidden="true"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg"
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg"
                    data-original-uri="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg"
                    style="object-fit: cover; vertical-align: bottom;"
                  />
                  <div
                    class="_15p4g025"
                    style="background-image: url(&quot;https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg&quot;); background-size: cover;"
                  ></div>
                </div>
              </el-col>
              <el-col style="font-size:13px;line-height:24px" :span="16">
                <span style="font-weight:bold">安全房源保障</span>
                <span>人工审核所有中国房源页面信息，入住更放心</span>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="4">
                <div
                  class="_1h6n1zu"
                  role="img"
                  aria-busy="false"
                  aria-label="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg"
                  style="display: inline-block; vertical-align: bottom; height: 50px; width: 50px; min-height: 1px;"
                >
                  <img
                    class="_9ofhsl"
                    aria-hidden="true"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg"
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg"
                    data-original-uri="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg"
                    style="object-fit: cover; vertical-align: bottom;"
                  />
                  <div
                    class="_15p4g025"
                    style="background-image: url(&quot;https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg&quot;); background-size: cover;"
                  ></div>
                </div>
              </el-col>
              <el-col style="font-size:13px;line-height:24px" :span="16">
                <span style="font-weight:bold">专业中文客服</span>
                <span>(86)400-841-8888、(86)010-8783-3463</span>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="4">
                <div
                  class="_1h6n1zu"
                  role="img"
                  aria-busy="false"
                  aria-label="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg"
                  style="display: inline-block; vertical-align: bottom; height: 50px; width: 50px; min-height: 1px;"
                >
                  <img
                    class="_9ofhsl"
                    aria-hidden="true"
                    alt="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg"
                    src="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg"
                    data-original-uri="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg"
                    style="object-fit: cover; vertical-align: bottom;"
                  />
                  <div
                    class="_15p4g025"
                    style="background-image: url(&quot;https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg&quot;); background-size: cover;"
                  ></div>
                </div>
              </el-col>
              <el-col style="font-size:13px;line-height:24px" :span="16">
                <span style="font-weight:bold">旅行安全保障</span>
                <span>多重风险控制设计，全方位保障您的形成安全</span>
              </el-col>
            </el-col>
          </el-row>

          <el-row
            style="font-size:15px;color:#006c70;font-weight:bold;margin-top:10px;padding-left:10px"
          >
            <span>查看全方位保障计划</span>
          </el-row>
        </el-row>

        <el-row style="margin-top:30px">
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>爱彼迎Plus</span>
            </div>
          </el-row>
          <el-row>
            <div style="font-size:12px;margin-top:10px;margin-left:10px">
              <span>品质和设计经过验证的精选房源系列</span>
            </div>
          </el-row>

          <el-row style="text-align:center;margin-top:10px">
            <img width="1180" src="/1.png" alt />
          </el-row>
        </el-row>
        <el-row style="margin-top:30px">
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>经典旅行城市</span>
            </div>
          </el-row>

          <el-row style="text-align:left;margin-top:10px">
            <el-col v-for="(item,index) in lvxingchengshi" :key="index" :span="4">
              <el-row>
                <img :src="item.img" alt />
              </el-row>
              <el-row style="font-weight:bold;font-size:15px">
                <span>{{item.title}}</span>
              </el-row>
              <el-row style="font-size:13px;margin-top:5px">
                <span>{{item.price}}</span>
              </el-row>
            </el-col>
          </el-row>
        </el-row>
        <el-row style="margin-top:30px">
          <el-row>
            <div style="font-size:21px;font-weight:bold;margin-left:10px">
              <span>最热线上体验</span>
            </div>
          </el-row>
          <el-row>
            <div style="font-size:12px;margin-top:10px;margin-left:10px">
              <span>翻开体验新一页，在家「躺游」全世界</span>
            </div>
          </el-row>

          <el-row style="text-align:left;margin-top:10px">
            <el-col v-for="(item,index) in xianshang" :key="index" :span="3">
              <el-row>
                <img style="width:130px;height:170px;" :src="item.img" alt />
              </el-row>
              <el-row>
                <span class="_5g1etn" style="color:rgb(255, 56, 92) ">
                  <svg
                    viewBox="0 0 1000 1000"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style="height: 12px; width: 12px; fill: currentcolor;"
                  >
                    <path
                      d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"
                    />
                  </svg>
                </span>
                <span style="font-size:14px">{{item.pingfen}}</span>
                <span
                  style="font-size:14px;color:rgb(107, 106, 106)"
                >({{item.pingjia}})·{{item.guojia}}</span>
              </el-row>
              <el-row style="width:130px">
                <span>{{item.title}}</span>
              </el-row>
              <el-row style="margin-top:6px;line-height:33px">
                <span>{{item.type}}</span>
              </el-row>
              <el-row style="font-weight:bold">
                <span>{{item.price}}</span>
              </el-row>
            </el-col>
          </el-row>
          <el-row
            style="font-size:15px;color:#006c70;font-weight:bold;margin-top:10px;padding-left:10px"
          >
            <span>探索更多></span>
          </el-row>
        </el-row>

        <el-row style="margin-top:30px">
          <el-divider></el-divider>
          <el-col :span="6">
            <div>
              <h4 role="presentation" class="_11hau3k">
                <div style="margin-left:10px" class="_ijwc53k">爱彼迎</div>
              </h4>
              <ul class="_ll34wp">
                <li class="_o2jk4c">
                  <a href="/careers" class="_l501whs" aria-busy="false">工作机会</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/press/news" class="_l501whs" aria-busy="false">爱彼迎新闻</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/policies" class="_l501whs" aria-busy="false">政策</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/diversity" class="_l501whs" aria-busy="false">多元化与归属感</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/accessibility" class="_l501whs" aria-busy="false">无障碍设施</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <h4 role="presentation" class="_11hau3k">
                <div style="margin-left:10px" class="_ijwc53k">发现</div>
              </h4>
              <ul class="_ll34wp">
                <li class="_o2jk4c">
                  <a href="/trust" class="_l501whs" aria-busy="false">信任与安全</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/invite?r=6" class="_l501whs" aria-busy="false">旅行基金</a>
                </li>
                <li class="_o2jk4c">
                  <a
                    href="https://www.airbnbcitizen.com?utm_source=airbnb&amp;utm_medium=footer&amp;utm_campaign=product"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="_l501whs"
                    aria-busy="false"
                  >爱彼迎公民</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/work?s=footer" class="_l501whs" aria-busy="false">商务差旅</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/things-to-do" class="_l501whs" aria-busy="false">缤纷体验</a>
                </li>
                <li class="_o2jk4c">
                  <a href="https://airbnbmag.com" class="_l501whs" aria-busy="false">爱彼迎杂志</a>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <h4 role="presentation" class="_11hau3k">
                <div style="margin-left:10px" class="_ijwc53k">出租</div>
              </h4>
              <ul class="_ll34wp">
                <li class="_o2jk4c">
                  <a href="/trust" class="_l501whs" aria-busy="false">为什么要出租？</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/invite?r=6" class="_l501whs" aria-busy="false">待客之道</a>
                </li>
                <li class="_o2jk4c">
                  <a
                    href="https://www.airbnbcitizen.com?utm_source=airbnb&amp;utm_medium=footer&amp;utm_campaign=product"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="_l501whs"
                    aria-busy="false"
                  >房东义务</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/work?s=footer" class="_l501whs" aria-busy="false">开展体验</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/things-to-do" class="_l501whs" aria-busy="false">Open Homes</a>
                </li>
                <li class="_o2jk4c">
                  <a href="https://airbnbmag.com" class="_l501whs" aria-busy="false">资源中心</a>
                  <span class="_146g3kk">
                    <span class="_dphve5f">
                      <span class="_6ey1uvk">新推出</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="6">
            <div>
              <h4 role="presentation" class="_11hau3k">
                <div style="margin-left:10px" class="_ijwc53k">客服支持</div>
              </h4>
              <ul class="_ll34wp">
                <li class="_o2jk4c">
                  <a href="/trust" class="_l501whs" aria-busy="false">帮助</a>
                </li>
                <li class="_o2jk4c">
                  <a href="/invite?r=6" class="_l501whs" aria-busy="false">邻里支持</a>
                  <span class="_146g3kk">
                    <span class="_dphve5f">
                      <span class="_6ey1uvk">新推出</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-divider></el-divider>
          <el-row style="margin-bottom:30px">
            <div class="_jro6t0">
              <el-col style="margin-top:8px" :span="1">
                <div class="_rqfxvmb">
                  <div style="margin-right: 8px;">
                    <svg
                      viewBox="0 0 1000 1000"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                      style="height: 1.5em; width: 1.5em; display: block; fill: rgb(118, 118, 118);"
                    >
                      <path
                        d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"
                      />
                    </svg>
                  </div>
                </div>
              </el-col>
              <el-col :span="22">
                <div class="_yylh3tj">
                  <a
                    href="http://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="_l501whs"
                    aria-busy="false"
                  >京ICP备16017121号</a> 京ICP证 160773号
                  <img
                    src="https://z1.muscache.cn/airbnb/static/packages/public_security_bureau_logo.d0289dc0.png"
                    alt="中国公安局标志"
                  />
                  <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="_l501whs"
                    aria-busy="false"
                  >京公网安备 11010502032345号</a> 安彼迎网络（北京）有限公司
                  <a
                    href="https://z1.muscache.cn/im/pictures/03ec62da-f467-4e2b-bfee-6eefd052d7f5.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="_l501whs"
                    aria-busy="false"
                  >营业执照</a>
                </div>

                <div>
                  <span dir="ltr" class="_yylh3tj">
                    <span
                      itemscope
                      itemtype="http://schema.org/Organization"
                    >© 2020 Airbnb, Inc. All rights reserved.条款 隐私政策 网站地图</span>
                  </span>
                </div>
              </el-col>
            </div>
          </el-row>
        </el-row>
      </el-col>
    </el-row>

    <el-dialog title :visible.sync="diagShow" width="30%">
      <el-row style="font-size:25px;font-weight:bold;color:rgb(72, 72, 72);text-align:left">
        <span>登录爱彼迎</span>
      </el-row>
      <el-row style="text-align:left;line-height:40px">
        <span>未注册的手机号或微信号验证后将自动创建新账号</span>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-select v-model="numm" placeholder="请选择">
            <el-option
              v-for="item in numoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="手机号" v-model="phone">
            <template slot="append">发送验证码</template>
          </el-input>
        </el-col>
      </el-row>

      <el-row style="margin-top:10px">
        <el-input placeholder="验证码"></el-input>
      </el-row>
      <el-row style="margin-top:10px">
        <el-button style="width:100%" type="info">立即登录</el-button>
      </el-row>
      <el-divider>或</el-divider>
      <el-row>
        <el-button style="width:100%">
          微信账号扫码登录
        </el-button>
      </el-row>
      <el-divider>使用其他方式</el-divider>

      <el-row>
        <el-col style :span="12">
          <el-row style="margin-left:15%">
            <el-col :span="1">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height: 1em; width: 1em; display: block; fill: rgb(0, 132, 137);"
              >
                <path
                  d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z"
                  fill-rule="evenodd"
                />
              </svg>
            </el-col>
            <el-col :span="12">账号密码登录</el-col>
          </el-row>
        </el-col>
        <el-col style :span="12">
          <el-row style="margin-left:15%">
            <el-col :span="1">
              <svg
                viewBox="0 0 32 32"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style="height: 1em; width: 1em; display: block; fill: rgb(213, 43, 42);"
              >
                <path
                  d="m30.85 14.19c-.15.61-.85.98-1.46.77-.64-.22-.97-.86-.76-1.5.67-2.14.27-4.05-1.21-5.7-1.37-1.56-3.5-2.17-5.47-1.78-.64.15-1.25-.28-1.37-.89-.15-.64.27-1.29.88-1.41 2.77-.61 5.68.31 7.72 2.51 1.97 2.24 2.55 5.33 1.67 8zm-4.77-5.18c-.95-1.11-2.4-1.53-3.74-1.25-.52.12-.88.61-.79 1.2.12.58.64.92 1.22.8.7-.15 1.31.06 1.82.61.49.58.61 1.23.39 1.9-.15.58.15 1.13.67 1.29a1.02 1.02 0 0 0 1.25-.67c.46-1.44.18-2.73-.82-3.86zm-9.33 13.42c-1 2.33-3.95 3.62-6.5 2.79-2.43-.77-3.53-3.22-2.43-5.42 1.06-2.11 3.8-3.31 6.2-2.69 2.52.64 3.74 3 2.73 5.33zm-5.13-1.81c-.82-.34-1.79 0-2.28.77s-.24 1.68.52 2.05 1.85 0 2.34-.77c.49-.83.24-1.72-.58-2.05zm1.94-.8c-.76-.34-1.37.8-.64 1.07.33.15.64.06.88-.31.15-.34.09-.64-.24-.77zm-.03 6.83c-5.08.52-9.45-1.78-9.79-5.18-.34-3.34 3.49-6.47 8.57-6.99 5.1-.49 9.45 1.84 9.78 5.18.34 3.34-3.55 6.5-8.57 6.99zm10.12-11.14c-.18-.03-.3-.09-.39-.13-.15-.09-.27-.28-.12-.64.52-1.32.55-2.36.03-3.06-1.06-1.44-3.68-1.38-6.81-.06l-.24.09c-.34.12-.67.03-.52-.43.52-1.66.4-2.85-.3-3.62-.89-.86-2.28-.89-4.23-.12-3.92 1.56-10.43 7.35-10.43 12.75 0 1.63.64 3.1 1.91 4.35 2.53 2.57 6.66 3.86 10.95 3.86 3.98 0 7.75-1.23 10.09-2.94 2.31-1.72 3.77-3.86 3.77-5.82 0-2.12-1.67-3.59-3.71-4.23z"
                  fill-rule="evenodd"
                />
              </svg>
            </el-col>
            <el-col :span="12">微博</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row style="text-align:left;margin-top:30px">
        <span>
          注册/登录即代表您年满 18 岁，已认真阅读并同意接受爱彼迎《服务条款》、《隐私政策》，并同意订阅爱彼迎特惠信息和政策更新，您可在设置中随时退订。
        </span>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      </span>
    </el-dialog>
  </div>
</template>

<script>
import xx from "@/views/components/xingxing";
export default {
  components: { xx },
  props: {},
  data() {
    return {
      input2: "",
      diagShow: false,
      options: [
        {
          value: "选项1",
          label: "房源",
        },
        {
          value: "选项2",
          label: "体验",
        },
      ],
      value: "选项1",
      address: "",
      date: "",
      tehui: "广州",
      remen: "成都",
      tehuiinfo: {
        guangzhou: [
          {
            img:
              "https://z1.muscache.cn/im/pictures/a4f4f632-b24d-44db-b367-ecaf1cd3cc80.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "【魔尔公寓•环市东店】豪华大床/5号线动物园/天河城/正佳广场/太古汇/体育西",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/9ea39332-34ef-4b48-ac39-a8e5e150b80d.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "北京路/海珠广场/城景立方空间/3分钟步行直达团一大广场地铁站/毗邻珠江夜游/网红设计师风格",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/c3a29755-a932-455c-ae30-b18a0b361565.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "魔尔公寓•环市东 行政套房/5号线动物园/天河城/正佳广场/太古汇/体育西/珠江新城CBD",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/35549c12-f1ed-4c2d-b308-746358e4f947.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "｛海玥④超高层大床房｝｛日式主题电影院｝｛和服木屐沉浸其中｝｛太古仓/沙面/上下九/珠江夜游｝",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/5753b453-419d-472c-b284-6a7b059feb01.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "北京路/海珠广场商圈/铂金城景大床/近6号线团一大广场地铁站/珠江夜游/2分钟步行到珠江边",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/836675ab-f0dd-4844-95fc-4eaac865108d.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "藏品· Red」可长租/全屋消毒/天河区/天河智慧城站/可做饭/成熟商圈内美式风情与日式投..",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
        ],
      },
      remeninfo: {
        chengdu: [
          {
            img:
              "https://z1.muscache.cn/im/pictures/98d47ca0-1d09-4bbc-a9c9-1db62cca8fd4.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "#疫情实惠房#【宋庆龄故居天趣】淮海中路宛平路地铁10/11交大站 downtown apt",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/28ecf793-4508-4bbf-86d1-bed59dd2c0c2.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "暑期特惠【熙上】设计师别墅/意大利风格花园洋房/轻奢大床房/迪士尼接送/免费早餐",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/a4f4f632-b24d-44db-b367-ecaf1cd3cc80.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "【魔尔公寓•环市东店】豪华大床/5号线动物园/天河城/正佳广场/太古汇/体育西",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/799535fe-9dce-4246-b9d1-ec1961474c24.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "设计师民宿-If villa 如果别墅-岸婷 亲水平台房 免费迪士尼接送",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/a0718400-b5e6-47e6-b9bc-f56dad990d84.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "上海展览中心/马勒别墅/Found158/淮海路/环贸",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
          {
            img:
              "https://z1.muscache.cn/im/pictures/84513c5f-abde-4b15-8363-c2f1763b67d2.jpg?aki_policy=large",
            smalltitle: "整套公寓·1张床",
            title:
              "黑五买一送一【后院小木屋】高安路建国西路徐家汇地铁1/7/9/10肇嘉浜路站/衡山路站/上海图书馆站",
            price: 205,
            unprice: 228,
            jibie: 10,
            jibieinfo: 5,
            fangdong: "·超赞房东",
          },
        ],
      },
      lvxingchengshi: [
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/HongKong-d2a0c673c4e1a28dbb7f6f0fddf38c32.jpg",
          title: "香港 亚洲美食之都",
          price: "人均￥440/晚",
        },
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Chiang-Mai-0c02e1fa3f13340df4e366004db7a7c7.jpg",
          title: "清迈 泰国最文艺小城",
          price: "人均￥440/晚",
        },
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/London-19c5702c00785c96a626e3989e0a3461.jpg",
          title: "伦敦 感受英伦风情",
          price: "人均￥440/晚",
        },
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Phuket-237db8c73af4ec081e69c3d0571b2a51.jpg",
          title: "普吉岛 东南亚看海",
          price: "人均￥440/晚",
        },
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Los-Angeles-b59e4b468916be8f5295c1491252f752.jpg",
          title: "洛杉矶 好莱坞式繁华",
          price: "人均￥440/晚",
        },
        {
          img:
            "https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Bali-380c5db84250a6207a0fca6c24e34349.jpg",
          title: "巴厘岛 度蜜月的首选",
          price: "人均￥440/晚",
        },
      ],
      xianshang: [
        {
          img:
            "https://z1.muscache.cn/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "桑格利亚酒和变装皇后的秘密",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/ba146b68-de50-459f-9b30-2e1afe913696.jpg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "「辨真假」的有趣历史游戏",
          type: "游戏之夜",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/ec6a9398-1ed3-400a-8f97-ee3e7eeed6dd.jpg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "与专业厨师一起做墨西哥街头美食炸玉米饼",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/lombard/MtTemplate-1671726-media_library/original/8afc1fa7-2dff-4d27-9c8d-da3f5b0dc8f4.jpeg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "寻宝游戏之客厅传奇",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/c93842c9-0a43-470c-a0bd-d953a4833832.jpg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "世界顶级咖啡大师班",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/lombard/MtTemplate-1653933-media_library/original/8d7982e4-3d59-49be-9aa6-d7abe695d2ca.jpeg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "饮品与绘画",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/a2a3a611-011b-48be-86f7-5d16cb8a443a.jpg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "与 Hilton Carter 一起播种植物",
          type: "学习调酒",
          price: "每人￥213起",
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/a2a3a611-011b-48be-86f7-5d16cb8a443a.jpg?aki_policy=poster",
          pingfen: 4.96,
          pingjia: 2528,
          guojia: "葡萄",
          title: "与 Hilton Carter 一起播种植物",
          type: "学习调酒",
          price: "每人￥213起",
        },
      ],
      numoptions: [
        {
          value: "+86",
          label: "+86",
        },
      ],
      numm: "+86",
      phone: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    cli() {
      this.diagShow = true;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  text-align: center;
}
.back {
  height: 520px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 300px,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/back.jpg");
  background-size: 100% 100%;
}
._1uqovkx6 {
  display: inline-block !important;
  vertical-align: middle !important;
  font-size: 34px !important;
  -webkit-transition: 0.25s color !important;
  -moz-transition: 0.25s color !important;
  transition: 0.25s color !important;
  color: #ffffff !important;
}
.header {
  color: #fff;
  height: 50px;
  font-size: 14px;
  // width: 130px;
  margin-top: 10px;
  font-weight: bold;
}
.header:hover {
  cursor: pointer;
  border-bottom: 3px solid #fff;
}
ul li {
  list-style-type: none;
}
._ll34wp {
  margin-left: -31px;
  line-height: 30px;
  color: #767676;
  font-weight: bold;
  font-size: 14px;
}
._dphve5f {
  display: inline-block !important;
  background-color: rgb(0, 106, 112) !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: transparent !important;
  border-image: initial !important;
  border-radius: 4px !important;
  padding: 0px 4px !important;
  // color:#fff;
  // font-size:12px
}
._6ey1uvk {
  overflow-wrap: break-word !important;
  font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑,
    "Microsoft YaHei", "Heiti SC" !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.33333em !important;
  color: rgb(255, 255, 255) !important;
  margin: 0px !important;
}
</style>