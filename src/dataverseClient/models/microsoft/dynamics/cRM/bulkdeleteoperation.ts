import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bulkdeleteoperation extends Crmbaseentity implements Parsable {
    private __asyncoperationid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _asyncoperationid?: Asyncoperation | undefined;
    private _bulkDeleteOperation_BulkDeleteFailure?: Bulkdeletefailure[] | undefined;
    private _bulkdeleteoperationid?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _failurecount?: number | undefined;
    private _isrecurring?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _nextrun?: Date | undefined;
    private _orderedquerysetxml?: string | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _processingqeindex?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _successcount?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    /**
     * Gets the _asyncoperationid_value property value. 
     * @returns a string
     */
    public get _asyncoperationid_value() {
        return this.__asyncoperationid_value;
    };
    /**
     * Sets the _asyncoperationid_value property value. 
     * @param value Value to set for the _asyncoperationid_value property.
     */
    public set _asyncoperationid_value(value: string | undefined) {
        this.__asyncoperationid_value = value;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the asyncoperationid property value. 
     * @returns a asyncoperation
     */
    public get asyncoperationid() {
        return this._asyncoperationid;
    };
    /**
     * Sets the asyncoperationid property value. 
     * @param value Value to set for the asyncoperationid property.
     */
    public set asyncoperationid(value: Asyncoperation | undefined) {
        this._asyncoperationid = value;
    };
    /**
     * Gets the bulkDeleteOperation_BulkDeleteFailure property value. 
     * @returns a bulkdeletefailure
     */
    public get bulkDeleteOperation_BulkDeleteFailure() {
        return this._bulkDeleteOperation_BulkDeleteFailure;
    };
    /**
     * Sets the bulkDeleteOperation_BulkDeleteFailure property value. 
     * @param value Value to set for the BulkDeleteOperation_BulkDeleteFailure property.
     */
    public set bulkDeleteOperation_BulkDeleteFailure(value: Bulkdeletefailure[] | undefined) {
        this._bulkDeleteOperation_BulkDeleteFailure = value;
    };
    /**
     * Gets the bulkdeleteoperationid property value. 
     * @returns a string
     */
    public get bulkdeleteoperationid() {
        return this._bulkdeleteoperationid;
    };
    /**
     * Sets the bulkdeleteoperationid property value. 
     * @param value Value to set for the bulkdeleteoperationid property.
     */
    public set bulkdeleteoperationid(value: string | undefined) {
        this._bulkdeleteoperationid = value;
    };
    /**
     * Instantiates a new bulkdeleteoperation and sets the default values.
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
     * Gets the failurecount property value. 
     * @returns a integer
     */
    public get failurecount() {
        return this._failurecount;
    };
    /**
     * Sets the failurecount property value. 
     * @param value Value to set for the failurecount property.
     */
    public set failurecount(value: number | undefined) {
        this._failurecount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_asyncoperationid_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._asyncoperationid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._owningbusinessunit_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bulkdeleteoperation)._owninguser_value = n.getStringValue(); },
            "asyncoperationid": (o, n) => { (o as unknown as Bulkdeleteoperation).asyncoperationid = n.getObjectValue<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bulkDeleteOperation_BulkDeleteFailure": (o, n) => { (o as unknown as Bulkdeleteoperation).bulkDeleteOperation_BulkDeleteFailure = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bulkdeleteoperationid": (o, n) => { (o as unknown as Bulkdeleteoperation).bulkdeleteoperationid = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Bulkdeleteoperation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bulkdeleteoperation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Bulkdeleteoperation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "failurecount": (o, n) => { (o as unknown as Bulkdeleteoperation).failurecount = n.getNumberValue(); },
            "isrecurring": (o, n) => { (o as unknown as Bulkdeleteoperation).isrecurring = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Bulkdeleteoperation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bulkdeleteoperation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Bulkdeleteoperation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Bulkdeleteoperation).name = n.getStringValue(); },
            "nextrun": (o, n) => { (o as unknown as Bulkdeleteoperation).nextrun = n.getDateValue(); },
            "orderedquerysetxml": (o, n) => { (o as unknown as Bulkdeleteoperation).orderedquerysetxml = n.getStringValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bulkdeleteoperation).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "processingqeindex": (o, n) => { (o as unknown as Bulkdeleteoperation).processingqeindex = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Bulkdeleteoperation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bulkdeleteoperation).statuscode = n.getNumberValue(); },
            "successcount": (o, n) => { (o as unknown as Bulkdeleteoperation).successcount = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bulkdeleteoperation).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bulkdeleteoperation).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isrecurring property value. 
     * @returns a boolean
     */
    public get isrecurring() {
        return this._isrecurring;
    };
    /**
     * Sets the isrecurring property value. 
     * @param value Value to set for the isrecurring property.
     */
    public set isrecurring(value: boolean | undefined) {
        this._isrecurring = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the nextrun property value. 
     * @returns a Date
     */
    public get nextrun() {
        return this._nextrun;
    };
    /**
     * Sets the nextrun property value. 
     * @param value Value to set for the nextrun property.
     */
    public set nextrun(value: Date | undefined) {
        this._nextrun = value;
    };
    /**
     * Gets the orderedquerysetxml property value. 
     * @returns a string
     */
    public get orderedquerysetxml() {
        return this._orderedquerysetxml;
    };
    /**
     * Sets the orderedquerysetxml property value. 
     * @param value Value to set for the orderedquerysetxml property.
     */
    public set orderedquerysetxml(value: string | undefined) {
        this._orderedquerysetxml = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the processingqeindex property value. 
     * @returns a integer
     */
    public get processingqeindex() {
        return this._processingqeindex;
    };
    /**
     * Sets the processingqeindex property value. 
     * @param value Value to set for the processingqeindex property.
     */
    public set processingqeindex(value: number | undefined) {
        this._processingqeindex = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_asyncoperationid_value", this._asyncoperationid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Asyncoperation>("asyncoperationid", this.asyncoperationid);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bulkDeleteOperation_BulkDeleteFailure", this.bulkDeleteOperation_BulkDeleteFailure);
        writer.writeStringValue("bulkdeleteoperationid", this.bulkdeleteoperationid);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("failurecount", this.failurecount);
        writer.writeBooleanValue("isrecurring", this.isrecurring);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("nextrun", this.nextrun);
        writer.writeStringValue("orderedquerysetxml", this.orderedquerysetxml);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeNumberValue("processingqeindex", this.processingqeindex);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("successcount", this.successcount);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the successcount property value. 
     * @returns a integer
     */
    public get successcount() {
        return this._successcount;
    };
    /**
     * Sets the successcount property value. 
     * @param value Value to set for the successcount property.
     */
    public set successcount(value: number | undefined) {
        this._successcount = value;
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
