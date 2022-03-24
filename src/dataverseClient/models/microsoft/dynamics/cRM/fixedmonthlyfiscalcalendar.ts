import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fixedmonthlyfiscalcalendar extends Crmbaseentity implements Parsable {
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
    private _fixedMonthlyFiscalCalendar_AsyncOperations?: Asyncoperation[] | undefined;
    private _fixedMonthlyFiscalCalendar_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _period1?: number | undefined;
    private _period1_base?: number | undefined;
    private _period10?: number | undefined;
    private _period10_base?: number | undefined;
    private _period11?: number | undefined;
    private _period11_base?: number | undefined;
    private _period12?: number | undefined;
    private _period12_base?: number | undefined;
    private _period13?: number | undefined;
    private _period13_base?: number | undefined;
    private _period2?: number | undefined;
    private _period2_base?: number | undefined;
    private _period3?: number | undefined;
    private _period3_base?: number | undefined;
    private _period4?: number | undefined;
    private _period4_base?: number | undefined;
    private _period5?: number | undefined;
    private _period5_base?: number | undefined;
    private _period6?: number | undefined;
    private _period6_base?: number | undefined;
    private _period7?: number | undefined;
    private _period7_base?: number | undefined;
    private _period8?: number | undefined;
    private _period8_base?: number | undefined;
    private _period9?: number | undefined;
    private _period9_base?: number | undefined;
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
     * Instantiates a new fixedmonthlyfiscalcalendar and sets the default values.
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
     * Gets the fixedMonthlyFiscalCalendar_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get fixedMonthlyFiscalCalendar_AsyncOperations() {
        return this._fixedMonthlyFiscalCalendar_AsyncOperations;
    };
    /**
     * Sets the fixedMonthlyFiscalCalendar_AsyncOperations property value. 
     * @param value Value to set for the FixedMonthlyFiscalCalendar_AsyncOperations property.
     */
    public set fixedMonthlyFiscalCalendar_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._fixedMonthlyFiscalCalendar_AsyncOperations = value;
    };
    /**
     * Gets the fixedMonthlyFiscalCalendar_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get fixedMonthlyFiscalCalendar_BulkDeleteFailures() {
        return this._fixedMonthlyFiscalCalendar_BulkDeleteFailures;
    };
    /**
     * Sets the fixedMonthlyFiscalCalendar_BulkDeleteFailures property value. 
     * @param value Value to set for the FixedMonthlyFiscalCalendar_BulkDeleteFailures property.
     */
    public set fixedMonthlyFiscalCalendar_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._fixedMonthlyFiscalCalendar_BulkDeleteFailures = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_businessunitid_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._modifiedonbehalfby_value = n.getStringValue(); },
            "_salespersonid_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._salespersonid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "effectiveon": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).effectiveon = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).exchangerate = n.getNumberValue(); },
            "fiscalperiodtype": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).fiscalperiodtype = n.getNumberValue(); },
            "fixedMonthlyFiscalCalendar_AsyncOperations": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).fixedMonthlyFiscalCalendar_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "fixedMonthlyFiscalCalendar_BulkDeleteFailures": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).fixedMonthlyFiscalCalendar_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "modifiedby": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "period1": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period1 = n.getNumberValue(); },
            "period1_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period1_base = n.getNumberValue(); },
            "period10": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period10 = n.getNumberValue(); },
            "period10_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period10_base = n.getNumberValue(); },
            "period11": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period11 = n.getNumberValue(); },
            "period11_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period11_base = n.getNumberValue(); },
            "period12": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period12 = n.getNumberValue(); },
            "period12_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period12_base = n.getNumberValue(); },
            "period13": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period13 = n.getNumberValue(); },
            "period13_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period13_base = n.getNumberValue(); },
            "period2": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period2 = n.getNumberValue(); },
            "period2_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period2_base = n.getNumberValue(); },
            "period3": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period3 = n.getNumberValue(); },
            "period3_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period3_base = n.getNumberValue(); },
            "period4": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period4 = n.getNumberValue(); },
            "period4_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period4_base = n.getNumberValue(); },
            "period5": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period5 = n.getNumberValue(); },
            "period5_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period5_base = n.getNumberValue(); },
            "period6": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period6 = n.getNumberValue(); },
            "period6_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period6_base = n.getNumberValue(); },
            "period7": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period7 = n.getNumberValue(); },
            "period7_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period7_base = n.getNumberValue(); },
            "period8": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period8 = n.getNumberValue(); },
            "period8_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period8_base = n.getNumberValue(); },
            "period9": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period9 = n.getNumberValue(); },
            "period9_base": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).period9_base = n.getNumberValue(); },
            "salespersonid": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).salespersonid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userfiscalcalendarid": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).userfiscalcalendarid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Fixedmonthlyfiscalcalendar).utcconversiontimezonecode = n.getNumberValue(); },
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
     * Gets the period1 property value. 
     * @returns a int64
     */
    public get period1() {
        return this._period1;
    };
    /**
     * Sets the period1 property value. 
     * @param value Value to set for the period1 property.
     */
    public set period1(value: number | undefined) {
        this._period1 = value;
    };
    /**
     * Gets the period1_base property value. 
     * @returns a int64
     */
    public get period1_base() {
        return this._period1_base;
    };
    /**
     * Sets the period1_base property value. 
     * @param value Value to set for the period1_base property.
     */
    public set period1_base(value: number | undefined) {
        this._period1_base = value;
    };
    /**
     * Gets the period10 property value. 
     * @returns a int64
     */
    public get period10() {
        return this._period10;
    };
    /**
     * Sets the period10 property value. 
     * @param value Value to set for the period10 property.
     */
    public set period10(value: number | undefined) {
        this._period10 = value;
    };
    /**
     * Gets the period10_base property value. 
     * @returns a int64
     */
    public get period10_base() {
        return this._period10_base;
    };
    /**
     * Sets the period10_base property value. 
     * @param value Value to set for the period10_base property.
     */
    public set period10_base(value: number | undefined) {
        this._period10_base = value;
    };
    /**
     * Gets the period11 property value. 
     * @returns a int64
     */
    public get period11() {
        return this._period11;
    };
    /**
     * Sets the period11 property value. 
     * @param value Value to set for the period11 property.
     */
    public set period11(value: number | undefined) {
        this._period11 = value;
    };
    /**
     * Gets the period11_base property value. 
     * @returns a int64
     */
    public get period11_base() {
        return this._period11_base;
    };
    /**
     * Sets the period11_base property value. 
     * @param value Value to set for the period11_base property.
     */
    public set period11_base(value: number | undefined) {
        this._period11_base = value;
    };
    /**
     * Gets the period12 property value. 
     * @returns a int64
     */
    public get period12() {
        return this._period12;
    };
    /**
     * Sets the period12 property value. 
     * @param value Value to set for the period12 property.
     */
    public set period12(value: number | undefined) {
        this._period12 = value;
    };
    /**
     * Gets the period12_base property value. 
     * @returns a int64
     */
    public get period12_base() {
        return this._period12_base;
    };
    /**
     * Sets the period12_base property value. 
     * @param value Value to set for the period12_base property.
     */
    public set period12_base(value: number | undefined) {
        this._period12_base = value;
    };
    /**
     * Gets the period13 property value. 
     * @returns a int64
     */
    public get period13() {
        return this._period13;
    };
    /**
     * Sets the period13 property value. 
     * @param value Value to set for the period13 property.
     */
    public set period13(value: number | undefined) {
        this._period13 = value;
    };
    /**
     * Gets the period13_base property value. 
     * @returns a int64
     */
    public get period13_base() {
        return this._period13_base;
    };
    /**
     * Sets the period13_base property value. 
     * @param value Value to set for the period13_base property.
     */
    public set period13_base(value: number | undefined) {
        this._period13_base = value;
    };
    /**
     * Gets the period2 property value. 
     * @returns a int64
     */
    public get period2() {
        return this._period2;
    };
    /**
     * Sets the period2 property value. 
     * @param value Value to set for the period2 property.
     */
    public set period2(value: number | undefined) {
        this._period2 = value;
    };
    /**
     * Gets the period2_base property value. 
     * @returns a int64
     */
    public get period2_base() {
        return this._period2_base;
    };
    /**
     * Sets the period2_base property value. 
     * @param value Value to set for the period2_base property.
     */
    public set period2_base(value: number | undefined) {
        this._period2_base = value;
    };
    /**
     * Gets the period3 property value. 
     * @returns a int64
     */
    public get period3() {
        return this._period3;
    };
    /**
     * Sets the period3 property value. 
     * @param value Value to set for the period3 property.
     */
    public set period3(value: number | undefined) {
        this._period3 = value;
    };
    /**
     * Gets the period3_base property value. 
     * @returns a int64
     */
    public get period3_base() {
        return this._period3_base;
    };
    /**
     * Sets the period3_base property value. 
     * @param value Value to set for the period3_base property.
     */
    public set period3_base(value: number | undefined) {
        this._period3_base = value;
    };
    /**
     * Gets the period4 property value. 
     * @returns a int64
     */
    public get period4() {
        return this._period4;
    };
    /**
     * Sets the period4 property value. 
     * @param value Value to set for the period4 property.
     */
    public set period4(value: number | undefined) {
        this._period4 = value;
    };
    /**
     * Gets the period4_base property value. 
     * @returns a int64
     */
    public get period4_base() {
        return this._period4_base;
    };
    /**
     * Sets the period4_base property value. 
     * @param value Value to set for the period4_base property.
     */
    public set period4_base(value: number | undefined) {
        this._period4_base = value;
    };
    /**
     * Gets the period5 property value. 
     * @returns a int64
     */
    public get period5() {
        return this._period5;
    };
    /**
     * Sets the period5 property value. 
     * @param value Value to set for the period5 property.
     */
    public set period5(value: number | undefined) {
        this._period5 = value;
    };
    /**
     * Gets the period5_base property value. 
     * @returns a int64
     */
    public get period5_base() {
        return this._period5_base;
    };
    /**
     * Sets the period5_base property value. 
     * @param value Value to set for the period5_base property.
     */
    public set period5_base(value: number | undefined) {
        this._period5_base = value;
    };
    /**
     * Gets the period6 property value. 
     * @returns a int64
     */
    public get period6() {
        return this._period6;
    };
    /**
     * Sets the period6 property value. 
     * @param value Value to set for the period6 property.
     */
    public set period6(value: number | undefined) {
        this._period6 = value;
    };
    /**
     * Gets the period6_base property value. 
     * @returns a int64
     */
    public get period6_base() {
        return this._period6_base;
    };
    /**
     * Sets the period6_base property value. 
     * @param value Value to set for the period6_base property.
     */
    public set period6_base(value: number | undefined) {
        this._period6_base = value;
    };
    /**
     * Gets the period7 property value. 
     * @returns a int64
     */
    public get period7() {
        return this._period7;
    };
    /**
     * Sets the period7 property value. 
     * @param value Value to set for the period7 property.
     */
    public set period7(value: number | undefined) {
        this._period7 = value;
    };
    /**
     * Gets the period7_base property value. 
     * @returns a int64
     */
    public get period7_base() {
        return this._period7_base;
    };
    /**
     * Sets the period7_base property value. 
     * @param value Value to set for the period7_base property.
     */
    public set period7_base(value: number | undefined) {
        this._period7_base = value;
    };
    /**
     * Gets the period8 property value. 
     * @returns a int64
     */
    public get period8() {
        return this._period8;
    };
    /**
     * Sets the period8 property value. 
     * @param value Value to set for the period8 property.
     */
    public set period8(value: number | undefined) {
        this._period8 = value;
    };
    /**
     * Gets the period8_base property value. 
     * @returns a int64
     */
    public get period8_base() {
        return this._period8_base;
    };
    /**
     * Sets the period8_base property value. 
     * @param value Value to set for the period8_base property.
     */
    public set period8_base(value: number | undefined) {
        this._period8_base = value;
    };
    /**
     * Gets the period9 property value. 
     * @returns a int64
     */
    public get period9() {
        return this._period9;
    };
    /**
     * Sets the period9 property value. 
     * @param value Value to set for the period9 property.
     */
    public set period9(value: number | undefined) {
        this._period9 = value;
    };
    /**
     * Gets the period9_base property value. 
     * @returns a int64
     */
    public get period9_base() {
        return this._period9_base;
    };
    /**
     * Sets the period9_base property value. 
     * @param value Value to set for the period9_base property.
     */
    public set period9_base(value: number | undefined) {
        this._period9_base = value;
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
        writer.writeCollectionOfObjectValues<Asyncoperation>("fixedMonthlyFiscalCalendar_AsyncOperations", this.fixedMonthlyFiscalCalendar_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("fixedMonthlyFiscalCalendar_BulkDeleteFailures", this.fixedMonthlyFiscalCalendar_BulkDeleteFailures);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("period1", this.period1);
        writer.writeNumberValue("period1_base", this.period1_base);
        writer.writeNumberValue("period10", this.period10);
        writer.writeNumberValue("period10_base", this.period10_base);
        writer.writeNumberValue("period11", this.period11);
        writer.writeNumberValue("period11_base", this.period11_base);
        writer.writeNumberValue("period12", this.period12);
        writer.writeNumberValue("period12_base", this.period12_base);
        writer.writeNumberValue("period13", this.period13);
        writer.writeNumberValue("period13_base", this.period13_base);
        writer.writeNumberValue("period2", this.period2);
        writer.writeNumberValue("period2_base", this.period2_base);
        writer.writeNumberValue("period3", this.period3);
        writer.writeNumberValue("period3_base", this.period3_base);
        writer.writeNumberValue("period4", this.period4);
        writer.writeNumberValue("period4_base", this.period4_base);
        writer.writeNumberValue("period5", this.period5);
        writer.writeNumberValue("period5_base", this.period5_base);
        writer.writeNumberValue("period6", this.period6);
        writer.writeNumberValue("period6_base", this.period6_base);
        writer.writeNumberValue("period7", this.period7);
        writer.writeNumberValue("period7_base", this.period7_base);
        writer.writeNumberValue("period8", this.period8);
        writer.writeNumberValue("period8_base", this.period8_base);
        writer.writeNumberValue("period9", this.period9);
        writer.writeNumberValue("period9_base", this.period9_base);
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
