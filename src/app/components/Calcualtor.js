"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import InputBox from "./InputBox";
import questionMark from "../assets/questionMark.gif";
import Link from "next/link";
import InputButton from "./InputButton";
import Button from "./Button";
import Heading from "./Heading";

const iwo1ConversionOptions = [
  "Select to convert",
  "No conversion",
  "Weekly to Biweekly",
  "Weekly to Semi monthly",
  "Weekly to Monthly",
  "Biweekly to Weekly",
  "Biweekly to Semi monthly",
  "Biweekly to Monthly",
  "Semi monthly to Weekly",
  "Semi monthly to Biweekly",
  "Semi monthly to Monthly",
  "Monthly to Weekly",
  "Monthly to Biweekly",
  "Monthly to Semimonthly",
];
const iwo1Labels = [
  { label: "Current Child Support", idHtmlfor: "current_child_support" },
  { label: "Past-Due Child Support", idHtmlfor: "past_due_child_support" },
  {
    label: "Current Cash Medical Support",
    idHtmlfor: "current_cash_medical_support",
  },
  {
    label: "Past-Due Cash Medical Support",
    idHtmlfor: "past_due_cash_medical_support",
  },
  { label: "Current Spousal Support", idHtmlfor: "current_spousal_support" },
  { label: "Past-Due Spousal Support", idHtmlfor: "past_due_spousal_support" },
  {
    label: "Other (third or fourth party)",
    idHtmlfor: "other_third_or_fourth_party",
  },
];

const Calcualtor = () => {
  const iwoCountSelectRef = useRef(null);
  const [iwoCount, setIwoCount] = useState("1");
  const iwoCountHandler = () => {
    if (Number(iwoCountSelectRef.current.value) > iwoCount) {
      setIwoCount(iwoCountSelectRef.current.value);
    }
  };
  const iwoReselectHandler = () => {
    setIwoCount("1");
    iwoCountSelectRef.current.value = "1";
  };
  return (
    <>
      <main>
        <div className="max-w-[770px] px-11 mx-auto">
          <InputBox
            label={"Employee Name"}
            defaultValue={"Name (optional)"}
            idHtmlfor="employee_name"
          />
          <div>
            <Heading
              heading={
                <>
                  Calculate{" "}
                  <abbr title="Aggregate Disposable Income: Income after subtraction of required deductions from gross pay">
                    Aggregate Disposable Income
                  </abbr>
                </>
              }
            />
            <InputBox
              label={
                <>
                  <abbr title="Gross earnings include compensation for personal services, such as wages, salary, commission, or bonus">
                    Gross earnings
                  </abbr>{" "}
                  per pay cycle
                </>
              }
              defaultValue={"0.00"}
              idHtmlfor="gross_earnings_per_pay_cycle"
            />
            <InputBox
              type="select"
              label={
                <>
                  Pay{" "}
                  <abbr title="Always choose YOUR normal pay period. For example, the Notice may order a weekly payment, but if you pay biweekly, choose Biweekly.">
                    cycle
                  </abbr>
                </>
              }
              defaultValue={"Weekly"}
              idHtmlfor="pay_cycle"
              options={["Weekly", "Biweekly", "Semi monthly", "Monthly"]}
            />
            <p className="border-b border-b-black pt-4 pb-1 text-17">
              <abbr title="Only the following deductions are required by New York State law">
                Deductions required by New York State law
              </abbr>
            </p>
            <InputBox
              label={"Federal income tax"}
              defaultValue={"0.00"}
              idHtmlfor="federal_income_tax"
            />
            <InputBox
              label={"Social Security tax"}
              defaultValue={"0.00"}
              idHtmlfor="social_security_tax"
            />
            <InputBox
              label={"Medicare tax"}
              defaultValue={"0.00"}
              idHtmlfor="medicare_tax"
            />
            <InputBox
              label={"State income tax"}
              defaultValue={"0.00"}
              idHtmlfor="state_income_tax"
            />
            <InputBox
              label={"City/Local income tax"}
              defaultValue={"0.00"}
              idHtmlfor="city_local_income_tax"
            />
            <InputBox
              label={"Involuntary retirement or pension plan payments"}
              defaultValue={"0.00"}
              idHtmlfor="involuntary_retirement_or_pension_plan_payments"
            />
            <InputBox
              disabled={true}
              label={"Total deductions required by law"}
            />
            <InputBox
              disabled={true}
              inputButton={true}
              inputButtonValue={"disposable income"}
            />
          </div>
          <div>
            <Heading
              heading={
                <>
                  Determine{" "}
                  <abbr title="Consumer Credit Protection Act" translate="no">
                    CCPA
                  </abbr>{" "}
                  percentage and Maximum Withholding
                </>
              }
            />
            <InputBox
              type="select"
              label={
                <>
                  Any{" "}
                  <abbr title="Income Withholding Order" translate="no">
                    IWO
                  </abbr>{" "}
                  issued on or after August 29, 2018
                </>
              }
              idHtmlfor="iwo_issued"
              defaultValue={"Select"}
              options={["Select", "Yes", "No"]}
            />
            <InputBox
              type="select"
              label={"Employee owes arrears greater than 12 weeks"}
              idHtmlfor="employee_owes_arrears"
              defaultValue={"Select"}
              options={["Select", "Yes", "No"]}
            />
            <div className="border-b border-b-black pt-4 pb-1">
              <InputButton value={"ccpa and maximum"} />
            </div>
            <InputBox
              disabled={true}
              label={
                <>
                  <abbr title="Consumer Credit Protection Act" translate="no">
                    CCPA
                  </abbr>{" "}
                  percentage is
                </>
              }
            />
            <InputBox
              disabled={true}
              label={
                <>
                  Maximum Withholding ={" "}
                  <abbr title="Consumer Credit Protection Act" translate="no">
                    CCPA
                  </abbr>{" "}
                  percentage x Disposable income
                </>
              }
            />
          </div>
          <div>
            <Heading heading={"Compare total ordered to Maximum Withholding"} />
            <InputBox
              type="select"
              ref1={iwoCountSelectRef}
              label={
                <>
                  How many{" "}
                  <abbr title="Income Withholding Orders" translate="no">
                    IWOs
                  </abbr>{" "}
                  did you receive for this employee?
                </>
              }
              idHtmlfor="iwo_received"
              defaultValue={iwoCount}
              options={["Select number", "1", "2", "3", "4", "5"]}
            />
            <div className="flex gap-2 border-b border-b-black pt-4 pb-1">
              <InputButton onClick={iwoCountHandler} value={"display iwos"} />
              <Button
                onClick={iwoReselectHandler}
                value={"reselect"}
                background="grey"
                width="2/5"
              />
            </div>
            {Array.from(
              { length: parseInt(iwoCount) },
              (_, index) => index + 1
            ).map((iwo, index) => (
              <InputBox
                key={index}
                label={
                  <>
                    <abbr title="Income Withholding Orders" translate="no">
                      IWOs
                    </abbr>{" "}
                    {iwo} Total Amount to Withhold for your pay cycle
                  </>
                }
                idHtmlfor={`iwo_${iwo}_total_amount_to_withhold_for_your_pay_cycle`}
                defaultValue={"0.00"}
              />
            ))}
            <InputBox
              label={
                <>
                  <div className="flex items-center">
                    <abbr title="As required by National Medical Support Notice">
                      Health Insurance Premium
                    </abbr>
                    <Link href="/">
                      <Image
                        src={questionMark}
                        className="ml-2.5"
                        alt="question mark"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </>
              }
              idHtmlfor="health_insurance_premium"
              defaultValue={"0.00"}
            />
            <div className="border-b border-b-black pt-4 pb-1">
              <InputButton value={"Compare to maximum"} />
            </div>
            <InputBox
              disabled={true}
              label={
                <>
                  Total of All{" "}
                  <abbr title="Income Withholding Orders" translate="no">
                    IWOs
                  </abbr>{" "}
                  and Health Insurance Premium
                </>
              }
              defaultValue={"0.00"}
            />
          </div>
          <div>
            <Heading
              heading={
                <>
                  Prorated Calculation: Enter{" "}
                  <abbr title="See Page 1 of the IWO" translate="no">
                    Current, Past-Due and Other Amounts
                  </abbr>{" "}
                  from each{" "}
                  <abbr title="Income Withholding Order" translate="no">
                    IWO
                  </abbr>
                </>
              }
            />
            <InputBox
              disabled={true}
              label="Pay cycle (selected above)"
              defaultValue={"Weekly"}
            />
          </div>
          <div>
            <Heading
              showQuestionMark={false}
              heading={
                <>
                  <abbr title="Income Withholding Order" translate="no">
                    IWO
                  </abbr>{" "}
                  1
                </>
              }
            />
            {iwo1Labels.map(({ label, idHtmlfor }, index) => (
              <div key={index} className="border-b border-b-black pt-4 pb-0.5">
                <InputBox
                  mainBorder={false}
                  label={label}
                  idHtmlfor={idHtmlfor}
                  defaultValue={"0.00"}
                />
                <InputBox
                  mainBorder={false}
                  type="select"
                  label="Convert from..."
                  options={iwo1ConversionOptions}
                  defaultValue={"No conversion"}
                  idHtmlfor={`convert_from_${idHtmlfor}`}
                />
                <InputBox
                  mainBorder={false}
                  disabled={true}
                  label="...to Your Amount"
                  defaultValue={"0.00"}
                />
              </div>
            ))}
            <InputBox
              disabled={true}
              inputButton={true}
              inputButtonValue={"convert and total iwo 1"}
              defaultValue={"0.00"}
            />
            <div className="border-b border-b-black pt-4 pb-1">
              <InputButton value={"total all iwos"} />
            </div>
            <InputBox disabled={true} label={"Total Current Support"} />
            <InputBox disabled={true} label={"Total Past-Due and Other"} />
            <InputBox
              disabled={true}
              label={
                <>
                  Total All{" "}
                  <abbr title="Income Withholding Orders" translate="no">
                    IWOs
                  </abbr>
                </>
              }
            />
            <p className="border-b border-b-black pt-4 pb-1 text-17">
              Health Insurance Premium (entered previously)
            </p>
            <InputBox
              disabled={true}
              label="Amount of premium"
              defaultValue={"0.00"}
            />
            <InputBox
              disabled={true}
              label="Pay cycle (selected above)"
              defaultValue={"Weekly"}
            />
            <div className="border-b border-b-black pt-4 pb-1">
              <InputButton value={"calculate withholding"} />
            </div>
          </div>
          <div>
            <Heading
              showQuestionMark={false}
              heading={"Allocated Withholding"}
            />
            <div className="border-b border-b-black pt-4 pb-0.5">
              <InputBox
                mainBorder={false}
                disabled={true}
                label={"IWO 1 Total"}
                defaultValue={"0.00"}
              />
              <InputBox
                mainBorder={false}
                disabled={true}
                label={"IWO 1 Current"}
                defaultValue={"0.00"}
              />
              <InputBox
                mainBorder={false}
                disabled={true}
                label={"IWO 1 Past-Due and Other"}
                defaultValue={"0.00"}
              />
            </div>
          </div>
          <div>
            <Heading
              heading={
                <>
                  Amounts to Withhold and{" "}
                  <abbr title="Remit amount of withholding for child support only. Do not include health insurance premium.">
                    Remit&nbsp;
                  </abbr>{" "}
                </>
              }
            />
            <InputBox disabled={true} label={"Withhold for Health Insurance"} />
            <InputBox disabled={true} label={"Total Amount to Withhold"} />
            <InputBox disabled={true} label={"Total Amount to Remit"} />
          </div>
          <div className="flex items-start gap-x-2 border-b border-b-black pt-4 pb-1">
            <Button value={"print"} background="navy" />
            <Button value={"new calculation"} background="green" />
            <Button value={"reset"} background="grey" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Calcualtor;
