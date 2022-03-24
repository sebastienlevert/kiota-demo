import {createAppconfiginstanceFromDiscriminatorValue} from './createAppconfiginstanceFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Appconfiginstance, Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appconfigmaster extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _appconfigmaster_appconfiginstance?: Appconfiginstance[] | undefined;
    private _appconfigmaster_createdby?: Systemuser | undefined;
    private _appconfigmaster_createdonbehalfby?: Systemuser | undefined;
    private _appconfigmaster_modifiedby?: Systemuser | undefined;
    private _appconfigmaster_modifiedonbehalfby?: Systemuser | undefined;
    private _appconfigmasterid?: string | undefined;
    private _configtype?: string | undefined;
    private _createdon?: Date | undefined;
    private _defaultvalue?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _isnavigationsetting?: number | undefined;
    private _modifiedon?: Date | undefined;
    private _name?: string | undefined;
    private _organization_appconfigmaster_appconfigmaster?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentappconfigmasterid?: string | undefined;
    private _validator?: string | undefined;
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
     * Gets the appconfigmaster_appconfiginstance property value. 
     * @returns a appconfiginstance
     */
    public get appconfigmaster_appconfiginstance() {
        return this._appconfigmaster_appconfiginstance;
    };
    /**
     * Sets the appconfigmaster_appconfiginstance property value. 
     * @param value Value to set for the appconfigmaster_appconfiginstance property.
     */
    public set appconfigmaster_appconfiginstance(value: Appconfiginstance[] | undefined) {
        this._appconfigmaster_appconfiginstance = value;
    };
    /**
     * Gets the appconfigmaster_createdby property value. 
     * @returns a systemuser
     */
    public get appconfigmaster_createdby() {
        return this._appconfigmaster_createdby;
    };
    /**
     * Sets the appconfigmaster_createdby property value. 
     * @param value Value to set for the appconfigmaster_createdby property.
     */
    public set appconfigmaster_createdby(value: Systemuser | undefined) {
        this._appconfigmaster_createdby = value;
    };
    /**
     * Gets the appconfigmaster_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfigmaster_createdonbehalfby() {
        return this._appconfigmaster_createdonbehalfby;
    };
    /**
     * Sets the appconfigmaster_createdonbehalfby property value. 
     * @param value Value to set for the appconfigmaster_createdonbehalfby property.
     */
    public set appconfigmaster_createdonbehalfby(value: Systemuser | undefined) {
        this._appconfigmaster_createdonbehalfby = value;
    };
    /**
     * Gets the appconfigmaster_modifiedby property value. 
     * @returns a systemuser
     */
    public get appconfigmaster_modifiedby() {
        return this._appconfigmaster_modifiedby;
    };
    /**
     * Sets the appconfigmaster_modifiedby property value. 
     * @param value Value to set for the appconfigmaster_modifiedby property.
     */
    public set appconfigmaster_modifiedby(value: Systemuser | undefined) {
        this._appconfigmaster_modifiedby = value;
    };
    /**
     * Gets the appconfigmaster_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get appconfigmaster_modifiedonbehalfby() {
        return this._appconfigmaster_modifiedonbehalfby;
    };
    /**
     * Sets the appconfigmaster_modifiedonbehalfby property value. 
     * @param value Value to set for the appconfigmaster_modifiedonbehalfby property.
     */
    public set appconfigmaster_modifiedonbehalfby(value: Systemuser | undefined) {
        this._appconfigmaster_modifiedonbehalfby = value;
    };
    /**
     * Gets the appconfigmasterid property value. 
     * @returns a string
     */
    public get appconfigmasterid() {
        return this._appconfigmasterid;
    };
    /**
     * Sets the appconfigmasterid property value. 
     * @param value Value to set for the appconfigmasterid property.
     */
    public set appconfigmasterid(value: string | undefined) {
        this._appconfigmasterid = value;
    };
    /**
     * Gets the configtype property value. 
     * @returns a string
     */
    public get configtype() {
        return this._configtype;
    };
    /**
     * Sets the configtype property value. 
     * @param value Value to set for the configtype property.
     */
    public set configtype(value: string | undefined) {
        this._configtype = value;
    };
    /**
     * Instantiates a new appconfigmaster and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the defaultvalue property value. 
     * @returns a string
     */
    public get defaultvalue() {
        return this._defaultvalue;
    };
    /**
     * Sets the defaultvalue property value. 
     * @param value Value to set for the defaultvalue property.
     */
    public set defaultvalue(value: string | undefined) {
        this._defaultvalue = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Appconfigmaster)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appconfigmaster)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appconfigmaster)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appconfigmaster)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Appconfigmaster)._organizationid_value = n.getStringValue(); },
            "appconfigmaster_appconfiginstance": (o, n) => { (o as unknown as Appconfigmaster).appconfigmaster_appconfiginstance = n.getCollectionOfObjectValues<Appconfiginstance>(createAppconfiginstanceFromDiscriminatorValue); },
            "appconfigmaster_createdby": (o, n) => { (o as unknown as Appconfigmaster).appconfigmaster_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfigmaster_createdonbehalfby": (o, n) => { (o as unknown as Appconfigmaster).appconfigmaster_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfigmaster_modifiedby": (o, n) => { (o as unknown as Appconfigmaster).appconfigmaster_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfigmaster_modifiedonbehalfby": (o, n) => { (o as unknown as Appconfigmaster).appconfigmaster_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "appconfigmasterid": (o, n) => { (o as unknown as Appconfigmaster).appconfigmasterid = n.getStringValue(); },
            "configtype": (o, n) => { (o as unknown as Appconfigmaster).configtype = n.getStringValue(); },
            "createdon": (o, n) => { (o as unknown as Appconfigmaster).createdon = n.getDateValue(); },
            "defaultvalue": (o, n) => { (o as unknown as Appconfigmaster).defaultvalue = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Appconfigmaster).importsequencenumber = n.getNumberValue(); },
            "isnavigationsetting": (o, n) => { (o as unknown as Appconfigmaster).isnavigationsetting = n.getNumberValue(); },
            "modifiedon": (o, n) => { (o as unknown as Appconfigmaster).modifiedon = n.getDateValue(); },
            "name": (o, n) => { (o as unknown as Appconfigmaster).name = n.getStringValue(); },
            "organization_appconfigmaster_appconfigmaster": (o, n) => { (o as unknown as Appconfigmaster).organization_appconfigmaster_appconfigmaster = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appconfigmaster).overriddencreatedon = n.getDateValue(); },
            "parentappconfigmasterid": (o, n) => { (o as unknown as Appconfigmaster).parentappconfigmasterid = n.getStringValue(); },
            "validator": (o, n) => { (o as unknown as Appconfigmaster).validator = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appconfigmaster).versionnumber = n.getNumberValue(); },
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
     * Gets the isnavigationsetting property value. 
     * @returns a integer
     */
    public get isnavigationsetting() {
        return this._isnavigationsetting;
    };
    /**
     * Sets the isnavigationsetting property value. 
     * @param value Value to set for the isnavigationsetting property.
     */
    public set isnavigationsetting(value: number | undefined) {
        this._isnavigationsetting = value;
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
     * Gets the organization_appconfigmaster_appconfigmaster property value. 
     * @returns a organization
     */
    public get organization_appconfigmaster_appconfigmaster() {
        return this._organization_appconfigmaster_appconfigmaster;
    };
    /**
     * Sets the organization_appconfigmaster_appconfigmaster property value. 
     * @param value Value to set for the organization_appconfigmaster_appconfigmaster property.
     */
    public set organization_appconfigmaster_appconfigmaster(value: Organization | undefined) {
        this._organization_appconfigmaster_appconfigmaster = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the parentappconfigmasterid property value. 
     * @returns a string
     */
    public get parentappconfigmasterid() {
        return this._parentappconfigmasterid;
    };
    /**
     * Sets the parentappconfigmasterid property value. 
     * @param value Value to set for the parentappconfigmasterid property.
     */
    public set parentappconfigmasterid(value: string | undefined) {
        this._parentappconfigmasterid = value;
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
        writer.writeCollectionOfObjectValues<Appconfiginstance>("appconfigmaster_appconfiginstance", this.appconfigmaster_appconfiginstance);
        writer.writeObjectValue<Systemuser>("appconfigmaster_createdby", this.appconfigmaster_createdby);
        writer.writeObjectValue<Systemuser>("appconfigmaster_createdonbehalfby", this.appconfigmaster_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("appconfigmaster_modifiedby", this.appconfigmaster_modifiedby);
        writer.writeObjectValue<Systemuser>("appconfigmaster_modifiedonbehalfby", this.appconfigmaster_modifiedonbehalfby);
        writer.writeStringValue("appconfigmasterid", this.appconfigmasterid);
        writer.writeStringValue("configtype", this.configtype);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeStringValue("defaultvalue", this.defaultvalue);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("isnavigationsetting", this.isnavigationsetting);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organization_appconfigmaster_appconfigmaster", this.organization_appconfigmaster_appconfigmaster);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("parentappconfigmasterid", this.parentappconfigmasterid);
        writer.writeStringValue("validator", this.validator);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the validator property value. 
     * @returns a string
     */
    public get validator() {
        return this._validator;
    };
    /**
     * Sets the validator property value. 
     * @param value Value to set for the validator property.
     */
    public set validator(value: string | undefined) {
        this._validator = value;
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
