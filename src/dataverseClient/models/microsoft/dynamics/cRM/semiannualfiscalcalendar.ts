import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Semiannualfiscalcalendar extends Crmbaseentity implements Parsable {
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
    private _firsthalf?: number | undefined;
    private _firsthalf_base?: number | undefined;
    private _fiscalperiodtype?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _salespersonid?: Systemuser | undefined;
    private _secondhalf?: number | undefined;
    private _secondhalf_base?: number | undefined;
    private _semiAnnualFiscalCalendar_AsyncOperations?: Asyncoperation[] | undefined;
    private _semiAnnualFiscalCalendar_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
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
     * Instantiates a new semiannualfiscalcalendar and sets the default values.
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
     * Gets the firsthalf property value. 
     * @returns a int64
     */
    public get firsthalf() {
        return this._firsthalf;
    };
    /**
     * Sets the firsthalf property value. 
     * @param value Value to set for the firsthalf property.
     */
    public set firsthalf(value: number | undefined) {
        this._firsthalf = value;
    };
    /**
     * Gets the firsthalf_base property value. 
     * @returns a int64
     */
    public get firsthalf_base() {
        return this._firsthalf_base;
    };
    /**
     * Sets the firsthalf_base property value. 
     * @param value Value to set for the firsthalf_base property.
     */
    public set firsthalf_base(value: number | undefined) {
        this._firsthalf_base = value;
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
            "_businessunitid_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._businessunitid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._modifiedonbehalfby_value = n.getStringValue(); },
            "_salespersonid_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._salespersonid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Semiannualfiscalcalendar)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Semiannualfiscalcalendar).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Semiannualfiscalcalendar).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Semiannualfiscalcalendar).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "effectiveon": (o, n) => { (o as unknown as Semiannualfiscalcalendar).effectiveon = n.getDateValue(); },
            "exchangerate": (o, n) => { (o as unknown as Semiannualfiscalcalendar).exchangerate = n.getNumberValue(); },
            "firsthalf": (o, n) => { (o as unknown as Semiannualfiscalcalendar).firsthalf = n.getNumberValue(); },
            "firsthalf_base": (o, n) => { (o as unknown as Semiannualfiscalcalendar).firsthalf_base = n.getNumberValue(); },
            "fiscalperiodtype": (o, n) => { (o as unknown as Semiannualfiscalcalendar).fiscalperiodtype = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Semiannualfiscalcalendar).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Semiannualfiscalcalendar).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Semiannualfiscalcalendar).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Semiannualfiscalcalendar).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "salespersonid": (o, n) => { (o as unknown as Semiannualfiscalcalendar).salespersonid = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "secondhalf": (o, n) => { (o as unknown as Semiannualfiscalcalendar).secondhalf = n.getNumberValue(); },
            "secondhalf_base": (o, n) => { (o as unknown as Semiannualfiscalcalendar).secondhalf_base = n.getNumberValue(); },
            "semiAnnualFiscalCalendar_AsyncOperations": (o, n) => { (o as unknown as Semiannualfiscalcalendar).semiAnnualFiscalCalendar_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "semiAnnualFiscalCalendar_BulkDeleteFailures": (o, n) => { (o as unknown as Semiannualfiscalcalendar).semiAnnualFiscalCalendar_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Semiannualfiscalcalendar).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Semiannualfiscalcalendar).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userfiscalcalendarid": (o, n) => { (o as unknown as Semiannualfiscalcalendar).userfiscalcalendarid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Semiannualfiscalcalendar).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the secondhalf property value. 
     * @returns a int64
     */
    public get secondhalf() {
        return this._secondhalf;
    };
    /**
     * Sets the secondhalf property value. 
     * @param value Value to set for the secondhalf property.
     */
    public set secondhalf(value: number | undefined) {
        this._secondhalf = value;
    };
    /**
     * Gets the secondhalf_base property value. 
     * @returns a int64
     */
    public get secondhalf_base() {
        return this._secondhalf_base;
    };
    /**
     * Sets the secondhalf_base property value. 
     * @param value Value to set for the secondhalf_base property.
     */
    public set secondhalf_base(value: number | undefined) {
        this._secondhalf_base = value;
    };
    /**
     * Gets the semiAnnualFiscalCalendar_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get semiAnnualFiscalCalendar_AsyncOperations() {
        return this._semiAnnualFiscalCalendar_AsyncOperations;
    };
    /**
     * Sets the semiAnnualFiscalCalendar_AsyncOperations property value. 
     * @param value Value to set for the SemiAnnualFiscalCalendar_AsyncOperations property.
     */
    public set semiAnnualFiscalCalendar_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._semiAnnualFiscalCalendar_AsyncOperations = value;
    };
    /**
     * Gets the semiAnnualFiscalCalendar_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get semiAnnualFiscalCalendar_BulkDeleteFailures() {
        return this._semiAnnualFiscalCalendar_BulkDeleteFailures;
    };
    /**
     * Sets the semiAnnualFiscalCalendar_BulkDeleteFailures property value. 
     * @param value Value to set for the SemiAnnualFiscalCalendar_BulkDeleteFailures property.
     */
    public set semiAnnualFiscalCalendar_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._semiAnnualFiscalCalendar_BulkDeleteFailures = value;
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
        writer.writeNumberValue("firsthalf", this.firsthalf);
        writer.writeNumberValue("firsthalf_base", this.firsthalf_base);
        writer.writeNumberValue("fiscalperiodtype", this.fiscalperiodtype);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Systemuser>("salespersonid", this.salespersonid);
        writer.writeNumberValue("secondhalf", this.secondhalf);
        writer.writeNumberValue("secondhalf_base", this.secondhalf_base);
        writer.writeCollectionOfObjectValues<Asyncoperation>("semiAnnualFiscalCalendar_AsyncOperations", this.semiAnnualFiscalCalendar_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("semiAnnualFiscalCalendar_BulkDeleteFailures", this.semiAnnualFiscalCalendar_BulkDeleteFailures);
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
