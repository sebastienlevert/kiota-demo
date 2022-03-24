import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Monthlyfiscalcalendar extends Crmbaseentity implements Parsable {
    private __businessunitid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __salespersonid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _effectiveon?: Date | undefined;
    private _exchangerate?: number | undefined;
    private _fiscalperiodtype?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _month1?: number | undefined;
    private _month1_base?: number | undefined;
    private _month10?: number | undefined;
    private _month10_base?: number | undefined;
    private _month11?: number | undefined;
    private _month11_base?: number | undefined;
    private _month12?: number | undefined;
    private _month12_base?: number | undefined;
    private _month2?: number | undefined;
    private _month2_base?: number | undefined;
    private _month3?: number | undefined;
    private _month3_base?: number | undefined;
    private _month4?: number | undefined;
    private _month4_base?: number | undefined;
    private _month5?: number | undefined;
    private _month5_base?: number | undefined;
    private _month6?: number | undefined;
    private _month6_base?: number | undefined;
    private _month7?: number | undefined;
    private _month7_base?: number | undefined;
    private _month8?: number | undefined;
    private _month8_base?: number | undefined;
    private _month9?: number | undefined;
    private _month9_base?: number | undefined;
    private _monthlyFiscalCalendar_AsyncOperations?: Asyncoperation[] | undefined;
    private _monthlyFiscalCalendar_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _salespersonid?: Systemuser | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _userfiscalcalendarid?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    /**
     * Gets the _businessunitid_value property value. 
     * @returns a string
     */
    public get _businessunitid_value() {
        return this.__businessunitid_value;
    };
    /**
     * Sets the _businessunitid_value property value. 
     * @param value Value to set for the _businessunitid_value property.
     */
    public set _businessunitid_value(value: string | undefined) {
        this.__businessunitid_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _salespersonid_value property value. 
     * @returns a string
     */
    public get _salespersonid_value() {
        return this.__salespersonid_value;
    };
    /**
     * Sets the _salespersonid_value property value. 
     * @param value Value to set for the _salespersonid_value property.
     */
    public set _salespersonid_value(value: string | undefined) {
        this.__salespersonid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new monthlyfiscalcalendar and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the effectiveon property value. 
     * @returns a Date
     */
    public get effectiveon() {
        return this._effectiveon;
    };
    /**
     * Sets the effectiveon property value. 
     * @param value Value to set for the effectiveon property.
     */
    public set effectiveon(value: Date | undefined) {
        this._effectiveon = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * Gets the fiscalperiodtype property value. 
     * @returns a integer
     */
    public get fiscalperiodtype() {
        return this._fiscalperiodtype;
    };
    /**
     * Sets the fiscalperiodtype property value. 
     * @param value Value to set for the fiscalperiodtype property.
     */
    public set fiscalperiodtype(value: number | undefined) {
        this._fiscalperiodtype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._modifiedonbehalfby_value = n.getStringValue(); },
            "_salespersonid_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._salespersonid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Monthlyfiscalcalendar)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Monthlyfiscalcalendar).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Monthlyfiscalcalendar).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Monthlyfiscalcalendar).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "effectiveon": (o, n) => { (o as unknown as Monthlyfiscalcalendar).effectiveon = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Monthlyfiscalcalendar).exchangerate = n.getNumberValue(); },
            "fiscalperiodtype": (o, n) => { (o as unknown as Monthlyfiscalcalendar).fiscalperiodtype = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Monthlyfiscalcalendar).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Monthlyfiscalcalendar).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Monthlyfiscalcalendar).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "month1": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month1 = n.getNumberValue(); },
            "month1_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month1_base = n.getNumberValue(); },
            "month10": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month10 = n.getNumberValue(); },
            "month10_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month10_base = n.getNumberValue(); },
            "month11": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month11 = n.getNumberValue(); },
            "month11_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month11_base = n.getNumberValue(); },
            "month12": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month12 = n.getNumberValue(); },
            "month12_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month12_base = n.getNumberValue(); },
            "month2": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month2 = n.getNumberValue(); },
            "month2_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month2_base = n.getNumberValue(); },
            "month3": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month3 = n.getNumberValue(); },
            "month3_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month3_base = n.getNumberValue(); },
            "month4": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month4 = n.getNumberValue(); },
            "month4_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month4_base = n.getNumberValue(); },
            "month5": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month5 = n.getNumberValue(); },
            "month5_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month5_base = n.getNumberValue(); },
            "month6": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month6 = n.getNumberValue(); },
            "month6_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month6_base = n.getNumberValue(); },
            "month7": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month7 = n.getNumberValue(); },
            "month7_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month7_base = n.getNumberValue(); },
            "month8": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month8 = n.getNumberValue(); },
            "month8_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month8_base = n.getNumberValue(); },
            "month9": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month9 = n.getNumberValue(); },
            "month9_base": (o, n) => { (o as unknown as Monthlyfiscalcalendar).month9_base = n.getNumberValue(); },
            "monthlyFiscalCalendar_AsyncOperations": (o, n) => { (o as unknown as Monthlyfiscalcalendar).monthlyFiscalCalendar_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "monthlyFiscalCalendar_BulkDeleteFailures": (o, n) => { (o as unknown as Monthlyfiscalcalendar).monthlyFiscalCalendar_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "salespersonid": (o, n) => { (o as unknown as Monthlyfiscalcalendar).salespersonid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Monthlyfiscalcalendar).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Monthlyfiscalcalendar).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userfiscalcalendarid": (o, n) => { (o as unknown as Monthlyfiscalcalendar).userfiscalcalendarid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Monthlyfiscalcalendar).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the month1 property value. 
     * @returns a int64
     */
    public get month1() {
        return this._month1;
    };
    /**
     * Sets the month1 property value. 
     * @param value Value to set for the month1 property.
     */
    public set month1(value: number | undefined) {
        this._month1 = value;
    };
    /**
     * Gets the month1_base property value. 
     * @returns a int64
     */
    public get month1_base() {
        return this._month1_base;
    };
    /**
     * Sets the month1_base property value. 
     * @param value Value to set for the month1_base property.
     */
    public set month1_base(value: number | undefined) {
        this._month1_base = value;
    };
    /**
     * Gets the month10 property value. 
     * @returns a int64
     */
    public get month10() {
        return this._month10;
    };
    /**
     * Sets the month10 property value. 
     * @param value Value to set for the month10 property.
     */
    public set month10(value: number | undefined) {
        this._month10 = value;
    };
    /**
     * Gets the month10_base property value. 
     * @returns a int64
     */
    public get month10_base() {
        return this._month10_base;
    };
    /**
     * Sets the month10_base property value. 
     * @param value Value to set for the month10_base property.
     */
    public set month10_base(value: number | undefined) {
        this._month10_base = value;
    };
    /**
     * Gets the month11 property value. 
     * @returns a int64
     */
    public get month11() {
        return this._month11;
    };
    /**
     * Sets the month11 property value. 
     * @param value Value to set for the month11 property.
     */
    public set month11(value: number | undefined) {
        this._month11 = value;
    };
    /**
     * Gets the month11_base property value. 
     * @returns a int64
     */
    public get month11_base() {
        return this._month11_base;
    };
    /**
     * Sets the month11_base property value. 
     * @param value Value to set for the month11_base property.
     */
    public set month11_base(value: number | undefined) {
        this._month11_base = value;
    };
    /**
     * Gets the month12 property value. 
     * @returns a int64
     */
    public get month12() {
        return this._month12;
    };
    /**
     * Sets the month12 property value. 
     * @param value Value to set for the month12 property.
     */
    public set month12(value: number | undefined) {
        this._month12 = value;
    };
    /**
     * Gets the month12_base property value. 
     * @returns a int64
     */
    public get month12_base() {
        return this._month12_base;
    };
    /**
     * Sets the month12_base property value. 
     * @param value Value to set for the month12_base property.
     */
    public set month12_base(value: number | undefined) {
        this._month12_base = value;
    };
    /**
     * Gets the month2 property value. 
     * @returns a int64
     */
    public get month2() {
        return this._month2;
    };
    /**
     * Sets the month2 property value. 
     * @param value Value to set for the month2 property.
     */
    public set month2(value: number | undefined) {
        this._month2 = value;
    };
    /**
     * Gets the month2_base property value. 
     * @returns a int64
     */
    public get month2_base() {
        return this._month2_base;
    };
    /**
     * Sets the month2_base property value. 
     * @param value Value to set for the month2_base property.
     */
    public set month2_base(value: number | undefined) {
        this._month2_base = value;
    };
    /**
     * Gets the month3 property value. 
     * @returns a int64
     */
    public get month3() {
        return this._month3;
    };
    /**
     * Sets the month3 property value. 
     * @param value Value to set for the month3 property.
     */
    public set month3(value: number | undefined) {
        this._month3 = value;
    };
    /**
     * Gets the month3_base property value. 
     * @returns a int64
     */
    public get month3_base() {
        return this._month3_base;
    };
    /**
     * Sets the month3_base property value. 
     * @param value Value to set for the month3_base property.
     */
    public set month3_base(value: number | undefined) {
        this._month3_base = value;
    };
    /**
     * Gets the month4 property value. 
     * @returns a int64
     */
    public get month4() {
        return this._month4;
    };
    /**
     * Sets the month4 property value. 
     * @param value Value to set for the month4 property.
     */
    public set month4(value: number | undefined) {
        this._month4 = value;
    };
    /**
     * Gets the month4_base property value. 
     * @returns a int64
     */
    public get month4_base() {
        return this._month4_base;
    };
    /**
     * Sets the month4_base property value. 
     * @param value Value to set for the month4_base property.
     */
    public set month4_base(value: number | undefined) {
        this._month4_base = value;
    };
    /**
     * Gets the month5 property value. 
     * @returns a int64
     */
    public get month5() {
        return this._month5;
    };
    /**
     * Sets the month5 property value. 
     * @param value Value to set for the month5 property.
     */
    public set month5(value: number | undefined) {
        this._month5 = value;
    };
    /**
     * Gets the month5_base property value. 
     * @returns a int64
     */
    public get month5_base() {
        return this._month5_base;
    };
    /**
     * Sets the month5_base property value. 
     * @param value Value to set for the month5_base property.
     */
    public set month5_base(value: number | undefined) {
        this._month5_base = value;
    };
    /**
     * Gets the month6 property value. 
     * @returns a int64
     */
    public get month6() {
        return this._month6;
    };
    /**
     * Sets the month6 property value. 
     * @param value Value to set for the month6 property.
     */
    public set month6(value: number | undefined) {
        this._month6 = value;
    };
    /**
     * Gets the month6_base property value. 
     * @returns a int64
     */
    public get month6_base() {
        return this._month6_base;
    };
    /**
     * Sets the month6_base property value. 
     * @param value Value to set for the month6_base property.
     */
    public set month6_base(value: number | undefined) {
        this._month6_base = value;
    };
    /**
     * Gets the month7 property value. 
     * @returns a int64
     */
    public get month7() {
        return this._month7;
    };
    /**
     * Sets the month7 property value. 
     * @param value Value to set for the month7 property.
     */
    public set month7(value: number | undefined) {
        this._month7 = value;
    };
    /**
     * Gets the month7_base property value. 
     * @returns a int64
     */
    public get month7_base() {
        return this._month7_base;
    };
    /**
     * Sets the month7_base property value. 
     * @param value Value to set for the month7_base property.
     */
    public set month7_base(value: number | undefined) {
        this._month7_base = value;
    };
    /**
     * Gets the month8 property value. 
     * @returns a int64
     */
    public get month8() {
        return this._month8;
    };
    /**
     * Sets the month8 property value. 
     * @param value Value to set for the month8 property.
     */
    public set month8(value: number | undefined) {
        this._month8 = value;
    };
    /**
     * Gets the month8_base property value. 
     * @returns a int64
     */
    public get month8_base() {
        return this._month8_base;
    };
    /**
     * Sets the month8_base property value. 
     * @param value Value to set for the month8_base property.
     */
    public set month8_base(value: number | undefined) {
        this._month8_base = value;
    };
    /**
     * Gets the month9 property value. 
     * @returns a int64
     */
    public get month9() {
        return this._month9;
    };
    /**
     * Sets the month9 property value. 
     * @param value Value to set for the month9 property.
     */
    public set month9(value: number | undefined) {
        this._month9 = value;
    };
    /**
     * Gets the month9_base property value. 
     * @returns a int64
     */
    public get month9_base() {
        return this._month9_base;
    };
    /**
     * Sets the month9_base property value. 
     * @param value Value to set for the month9_base property.
     */
    public set month9_base(value: number | undefined) {
        this._month9_base = value;
    };
    /**
     * Gets the monthlyFiscalCalendar_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get monthlyFiscalCalendar_AsyncOperations() {
        return this._monthlyFiscalCalendar_AsyncOperations;
    };
    /**
     * Sets the monthlyFiscalCalendar_AsyncOperations property value. 
     * @param value Value to set for the MonthlyFiscalCalendar_AsyncOperations property.
     */
    public set monthlyFiscalCalendar_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._monthlyFiscalCalendar_AsyncOperations = value;
    };
    /**
     * Gets the monthlyFiscalCalendar_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get monthlyFiscalCalendar_BulkDeleteFailures() {
        return this._monthlyFiscalCalendar_BulkDeleteFailures;
    };
    /**
     * Sets the monthlyFiscalCalendar_BulkDeleteFailures property value. 
     * @param value Value to set for the MonthlyFiscalCalendar_BulkDeleteFailures property.
     */
    public set monthlyFiscalCalendar_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._monthlyFiscalCalendar_BulkDeleteFailures = value;
    };
    /**
     * Gets the salespersonid property value. 
     * @returns a systemuser
     */
    public get salespersonid() {
        return this._salespersonid;
    };
    /**
     * Sets the salespersonid property value. 
     * @param value Value to set for the salespersonid property.
     */
    public set salespersonid(value: Systemuser | undefined) {
        this._salespersonid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_businessunitid_value", this._businessunitid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_salespersonid_value", this._salespersonid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeDateValue("effectiveon", this.effectiveon);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("fiscalperiodtype", this.fiscalperiodtype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("month1", this.month1);
        writer.writeNumberValue("month1_base", this.month1_base);
        writer.writeNumberValue("month10", this.month10);
        writer.writeNumberValue("month10_base", this.month10_base);
        writer.writeNumberValue("month11", this.month11);
        writer.writeNumberValue("month11_base", this.month11_base);
        writer.writeNumberValue("month12", this.month12);
        writer.writeNumberValue("month12_base", this.month12_base);
        writer.writeNumberValue("month2", this.month2);
        writer.writeNumberValue("month2_base", this.month2_base);
        writer.writeNumberValue("month3", this.month3);
        writer.writeNumberValue("month3_base", this.month3_base);
        writer.writeNumberValue("month4", this.month4);
        writer.writeNumberValue("month4_base", this.month4_base);
        writer.writeNumberValue("month5", this.month5);
        writer.writeNumberValue("month5_base", this.month5_base);
        writer.writeNumberValue("month6", this.month6);
        writer.writeNumberValue("month6_base", this.month6_base);
        writer.writeNumberValue("month7", this.month7);
        writer.writeNumberValue("month7_base", this.month7_base);
        writer.writeNumberValue("month8", this.month8);
        writer.writeNumberValue("month8_base", this.month8_base);
        writer.writeNumberValue("month9", this.month9);
        writer.writeNumberValue("month9_base", this.month9_base);
        writer.writeCollectionOfObjectValues<Asyncoperation>("monthlyFiscalCalendar_AsyncOperations", this.monthlyFiscalCalendar_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("monthlyFiscalCalendar_BulkDeleteFailures", this.monthlyFiscalCalendar_BulkDeleteFailures);
        writer.writeObjectValue<Systemuser>("salespersonid", this.salespersonid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("userfiscalcalendarid", this.userfiscalcalendarid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the userfiscalcalendarid property value. 
     * @returns a string
     */
    public get userfiscalcalendarid() {
        return this._userfiscalcalendarid;
    };
    /**
     * Sets the userfiscalcalendarid property value. 
     * @param value Value to set for the userfiscalcalendarid property.
     */
    public set userfiscalcalendarid(value: string | undefined) {
        this._userfiscalcalendarid = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
}
