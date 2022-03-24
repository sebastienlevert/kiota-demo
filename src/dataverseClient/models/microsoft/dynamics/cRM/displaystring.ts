import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Displaystring extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customcomment?: string | undefined;
    private _customdisplaystring?: string | undefined;
    private _displayString_AsyncOperations?: Asyncoperation[] | undefined;
    private _displayString_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _displaystringid?: string | undefined;
    private _displaystringidunique?: string | undefined;
    private _displaystringkey?: string | undefined;
    private _formatparameters?: number | undefined;
    private _ismanaged?: boolean | undefined;
    private _languagecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _publisheddisplaystring?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new displaystring and sets the default values.
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
     * Gets the customcomment property value. 
     * @returns a string
     */
    public get customcomment() {
        return this._customcomment;
    };
    /**
     * Sets the customcomment property value. 
     * @param value Value to set for the customcomment property.
     */
    public set customcomment(value: string | undefined) {
        this._customcomment = value;
    };
    /**
     * Gets the customdisplaystring property value. 
     * @returns a string
     */
    public get customdisplaystring() {
        return this._customdisplaystring;
    };
    /**
     * Sets the customdisplaystring property value. 
     * @param value Value to set for the customdisplaystring property.
     */
    public set customdisplaystring(value: string | undefined) {
        this._customdisplaystring = value;
    };
    /**
     * Gets the displayString_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get displayString_AsyncOperations() {
        return this._displayString_AsyncOperations;
    };
    /**
     * Sets the displayString_AsyncOperations property value. 
     * @param value Value to set for the DisplayString_AsyncOperations property.
     */
    public set displayString_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._displayString_AsyncOperations = value;
    };
    /**
     * Gets the displayString_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get displayString_BulkDeleteFailures() {
        return this._displayString_BulkDeleteFailures;
    };
    /**
     * Sets the displayString_BulkDeleteFailures property value. 
     * @param value Value to set for the DisplayString_BulkDeleteFailures property.
     */
    public set displayString_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._displayString_BulkDeleteFailures = value;
    };
    /**
     * Gets the displaystringid property value. 
     * @returns a string
     */
    public get displaystringid() {
        return this._displaystringid;
    };
    /**
     * Sets the displaystringid property value. 
     * @param value Value to set for the displaystringid property.
     */
    public set displaystringid(value: string | undefined) {
        this._displaystringid = value;
    };
    /**
     * Gets the displaystringidunique property value. 
     * @returns a string
     */
    public get displaystringidunique() {
        return this._displaystringidunique;
    };
    /**
     * Sets the displaystringidunique property value. 
     * @param value Value to set for the displaystringidunique property.
     */
    public set displaystringidunique(value: string | undefined) {
        this._displaystringidunique = value;
    };
    /**
     * Gets the displaystringkey property value. 
     * @returns a string
     */
    public get displaystringkey() {
        return this._displaystringkey;
    };
    /**
     * Sets the displaystringkey property value. 
     * @param value Value to set for the displaystringkey property.
     */
    public set displaystringkey(value: string | undefined) {
        this._displaystringkey = value;
    };
    /**
     * Gets the formatparameters property value. 
     * @returns a integer
     */
    public get formatparameters() {
        return this._formatparameters;
    };
    /**
     * Sets the formatparameters property value. 
     * @param value Value to set for the formatparameters property.
     */
    public set formatparameters(value: number | undefined) {
        this._formatparameters = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Displaystring)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Displaystring)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Displaystring)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Displaystring)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Displaystring)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Displaystring).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Displaystring).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Displaystring).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Displaystring).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customcomment": (o, n) => { (o as unknown as Displaystring).customcomment = n.getStringValue(); },
            "customdisplaystring": (o, n) => { (o as unknown as Displaystring).customdisplaystring = n.getStringValue(); },
            "displayString_AsyncOperations": (o, n) => { (o as unknown as Displaystring).displayString_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "displayString_BulkDeleteFailures": (o, n) => { (o as unknown as Displaystring).displayString_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "displaystringid": (o, n) => { (o as unknown as Displaystring).displaystringid = n.getStringValue(); },
            "displaystringidunique": (o, n) => { (o as unknown as Displaystring).displaystringidunique = n.getStringValue(); },
            "displaystringkey": (o, n) => { (o as unknown as Displaystring).displaystringkey = n.getStringValue(); },
            "formatparameters": (o, n) => { (o as unknown as Displaystring).formatparameters = n.getNumberValue(); },
            "ismanaged": (o, n) => { (o as unknown as Displaystring).ismanaged = n.getBooleanValue(); },
            "languagecode": (o, n) => { (o as unknown as Displaystring).languagecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Displaystring).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Displaystring).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Displaystring).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Displaystring).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Displaystring).overwritetime = n.getDateValue(); },
            "publisheddisplaystring": (o, n) => { (o as unknown as Displaystring).publisheddisplaystring = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Displaystring).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Displaystring).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the publisheddisplaystring property value. 
     * @returns a string
     */
    public get publisheddisplaystring() {
        return this._publisheddisplaystring;
    };
    /**
     * Sets the publisheddisplaystring property value. 
     * @param value Value to set for the publisheddisplaystring property.
     */
    public set publisheddisplaystring(value: string | undefined) {
        this._publisheddisplaystring = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("customcomment", this.customcomment);
        writer.writeStringValue("customdisplaystring", this.customdisplaystring);
        writer.writeCollectionOfObjectValues<Asyncoperation>("displayString_AsyncOperations", this.displayString_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("displayString_BulkDeleteFailures", this.displayString_BulkDeleteFailures);
        writer.writeStringValue("displaystringid", this.displaystringid);
        writer.writeStringValue("displaystringidunique", this.displaystringidunique);
        writer.writeStringValue("displaystringkey", this.displaystringkey);
        writer.writeNumberValue("formatparameters", this.formatparameters);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("publisheddisplaystring", this.publisheddisplaystring);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
