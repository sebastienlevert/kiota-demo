import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Quarterlyfiscalcalendar extends Crmbaseentity implements Parsable {
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
    private _quarter1?: number | undefined;
    private _quarter1_base?: number | undefined;
    private _quarter2?: number | undefined;
    private _quarter2_base?: number | undefined;
    private _quarter3?: number | undefined;
    private _quarter3_base?: number | undefined;
    private _quarter4?: number | undefined;
    private _quarter4_base?: number | undefined;
    private _quarterlyFiscalCalendar_AsyncOperations?: Asyncoperation[] | undefined;
    private _quarterlyFiscalCalendar_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
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
     * Instantiates a new quarterlyfiscalcalendar and sets the default values.
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
            "_businessunitid_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._modifiedonbehalfby_value = n.getStringValue(); },
            "_salespersonid_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._salespersonid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Quarterlyfiscalcalendar)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "effectiveon": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).effectiveon = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).exchangerate = n.getNumberValue(); },
            "fiscalperiodtype": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).fiscalperiodtype = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "quarter1": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter1 = n.getNumberValue(); },
            "quarter1_base": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter1_base = n.getNumberValue(); },
            "quarter2": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter2 = n.getNumberValue(); },
            "quarter2_base": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter2_base = n.getNumberValue(); },
            "quarter3": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter3 = n.getNumberValue(); },
            "quarter3_base": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter3_base = n.getNumberValue(); },
            "quarter4": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter4 = n.getNumberValue(); },
            "quarter4_base": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarter4_base = n.getNumberValue(); },
            "quarterlyFiscalCalendar_AsyncOperations": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarterlyFiscalCalendar_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "quarterlyFiscalCalendar_BulkDeleteFailures": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).quarterlyFiscalCalendar_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "salespersonid": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).salespersonid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userfiscalcalendarid": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).userfiscalcalendarid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Quarterlyfiscalcalendar).utcconversiontimezonecode = n.getNumberValue(); },
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
     * Gets the quarter1 property value. 
     * @returns a int64
     */
    public get quarter1() {
        return this._quarter1;
    };
    /**
     * Sets the quarter1 property value. 
     * @param value Value to set for the quarter1 property.
     */
    public set quarter1(value: number | undefined) {
        this._quarter1 = value;
    };
    /**
     * Gets the quarter1_base property value. 
     * @returns a int64
     */
    public get quarter1_base() {
        return this._quarter1_base;
    };
    /**
     * Sets the quarter1_base property value. 
     * @param value Value to set for the quarter1_base property.
     */
    public set quarter1_base(value: number | undefined) {
        this._quarter1_base = value;
    };
    /**
     * Gets the quarter2 property value. 
     * @returns a int64
     */
    public get quarter2() {
        return this._quarter2;
    };
    /**
     * Sets the quarter2 property value. 
     * @param value Value to set for the quarter2 property.
     */
    public set quarter2(value: number | undefined) {
        this._quarter2 = value;
    };
    /**
     * Gets the quarter2_base property value. 
     * @returns a int64
     */
    public get quarter2_base() {
        return this._quarter2_base;
    };
    /**
     * Sets the quarter2_base property value. 
     * @param value Value to set for the quarter2_base property.
     */
    public set quarter2_base(value: number | undefined) {
        this._quarter2_base = value;
    };
    /**
     * Gets the quarter3 property value. 
     * @returns a int64
     */
    public get quarter3() {
        return this._quarter3;
    };
    /**
     * Sets the quarter3 property value. 
     * @param value Value to set for the quarter3 property.
     */
    public set quarter3(value: number | undefined) {
        this._quarter3 = value;
    };
    /**
     * Gets the quarter3_base property value. 
     * @returns a int64
     */
    public get quarter3_base() {
        return this._quarter3_base;
    };
    /**
     * Sets the quarter3_base property value. 
     * @param value Value to set for the quarter3_base property.
     */
    public set quarter3_base(value: number | undefined) {
        this._quarter3_base = value;
    };
    /**
     * Gets the quarter4 property value. 
     * @returns a int64
     */
    public get quarter4() {
        return this._quarter4;
    };
    /**
     * Sets the quarter4 property value. 
     * @param value Value to set for the quarter4 property.
     */
    public set quarter4(value: number | undefined) {
        this._quarter4 = value;
    };
    /**
     * Gets the quarter4_base property value. 
     * @returns a int64
     */
    public get quarter4_base() {
        return this._quarter4_base;
    };
    /**
     * Sets the quarter4_base property value. 
     * @param value Value to set for the quarter4_base property.
     */
    public set quarter4_base(value: number | undefined) {
        this._quarter4_base = value;
    };
    /**
     * Gets the quarterlyFiscalCalendar_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get quarterlyFiscalCalendar_AsyncOperations() {
        return this._quarterlyFiscalCalendar_AsyncOperations;
    };
    /**
     * Sets the quarterlyFiscalCalendar_AsyncOperations property value. 
     * @param value Value to set for the QuarterlyFiscalCalendar_AsyncOperations property.
     */
    public set quarterlyFiscalCalendar_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._quarterlyFiscalCalendar_AsyncOperations = value;
    };
    /**
     * Gets the quarterlyFiscalCalendar_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get quarterlyFiscalCalendar_BulkDeleteFailures() {
        return this._quarterlyFiscalCalendar_BulkDeleteFailures;
    };
    /**
     * Sets the quarterlyFiscalCalendar_BulkDeleteFailures property value. 
     * @param value Value to set for the QuarterlyFiscalCalendar_BulkDeleteFailures property.
     */
    public set quarterlyFiscalCalendar_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._quarterlyFiscalCalendar_BulkDeleteFailures = value;
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
        writer.writeNumberValue("quarter1", this.quarter1);
        writer.writeNumberValue("quarter1_base", this.quarter1_base);
        writer.writeNumberValue("quarter2", this.quarter2);
        writer.writeNumberValue("quarter2_base", this.quarter2_base);
        writer.writeNumberValue("quarter3", this.quarter3);
        writer.writeNumberValue("quarter3_base", this.quarter3_base);
        writer.writeNumberValue("quarter4", this.quarter4);
        writer.writeNumberValue("quarter4_base", this.quarter4_base);
        writer.writeCollectionOfObjectValues<Asyncoperation>("quarterlyFiscalCalendar_AsyncOperations", this.quarterlyFiscalCalendar_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("quarterlyFiscalCalendar_BulkDeleteFailures", this.quarterlyFiscalCalendar_BulkDeleteFailures);
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
