import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSdkmessageFromDiscriminatorValue} from './createSdkmessageFromDiscriminatorValue';
import {createSdkmessageprocessingstepFromDiscriminatorValue} from './createSdkmessageprocessingstepFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Sdkmessage, Sdkmessageprocessingstep, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sdkmessagefilter extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __sdkmessageid_value?: string | undefined;
    private _availability?: number | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customizationlevel?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomprocessingstepallowed?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _isvisible?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _primaryobjecttypecode?: string | undefined;
    private _restrictionlevel?: number | undefined;
    private _sdkmessagefilterid?: string | undefined;
    private _sdkmessagefilterid_sdkmessageprocessingstep?: Sdkmessageprocessingstep[] | undefined;
    private _sdkmessagefilteridunique?: string | undefined;
    private _sdkmessageid?: Sdkmessage | undefined;
    private _secondaryobjecttypecode?: string | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    private _workflowsdkstepenabled?: boolean | undefined;
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
     * Gets the _sdkmessageid_value property value. 
     * @returns a string
     */
    public get _sdkmessageid_value() {
        return this.__sdkmessageid_value;
    };
    /**
     * Sets the _sdkmessageid_value property value. 
     * @param value Value to set for the _sdkmessageid_value property.
     */
    public set _sdkmessageid_value(value: string | undefined) {
        this.__sdkmessageid_value = value;
    };
    /**
     * Gets the availability property value. 
     * @returns a integer
     */
    public get availability() {
        return this._availability;
    };
    /**
     * Sets the availability property value. 
     * @param value Value to set for the availability property.
     */
    public set availability(value: number | undefined) {
        this._availability = value;
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
     * Instantiates a new sdkmessagefilter and sets the default values.
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
     * Gets the customizationlevel property value. 
     * @returns a integer
     */
    public get customizationlevel() {
        return this._customizationlevel;
    };
    /**
     * Sets the customizationlevel property value. 
     * @param value Value to set for the customizationlevel property.
     */
    public set customizationlevel(value: number | undefined) {
        this._customizationlevel = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sdkmessagefilter)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sdkmessagefilter)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sdkmessagefilter)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sdkmessagefilter)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sdkmessagefilter)._organizationid_value = n.getStringValue(); },
            "_sdkmessageid_value": (o, n) => { (o as unknown as Sdkmessagefilter)._sdkmessageid_value = n.getStringValue(); },
            "availability": (o, n) => { (o as unknown as Sdkmessagefilter).availability = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Sdkmessagefilter).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Sdkmessagefilter).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sdkmessagefilter).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sdkmessagefilter).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customizationlevel": (o, n) => { (o as unknown as Sdkmessagefilter).customizationlevel = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Sdkmessagefilter).introducedversion = n.getStringValue(); },
            "iscustomprocessingstepallowed": (o, n) => { (o as unknown as Sdkmessagefilter).iscustomprocessingstepallowed = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Sdkmessagefilter).ismanaged = n.getBooleanValue(); },
            "isvisible": (o, n) => { (o as unknown as Sdkmessagefilter).isvisible = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sdkmessagefilter).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sdkmessagefilter).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sdkmessagefilter).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sdkmessagefilter).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Sdkmessagefilter).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sdkmessagefilter).overwritetime = n.getDateValue(); },
            "primaryobjecttypecode": (o, n) => { (o as unknown as Sdkmessagefilter).primaryobjecttypecode = n.getStringValue(); },
            "restrictionlevel": (o, n) => { (o as unknown as Sdkmessagefilter).restrictionlevel = n.getNumberValue(); },
            "sdkmessagefilterid": (o, n) => { (o as unknown as Sdkmessagefilter).sdkmessagefilterid = n.getStringValue(); },
            "sdkmessagefilterid_sdkmessageprocessingstep": (o, n) => { (o as unknown as Sdkmessagefilter).sdkmessagefilterid_sdkmessageprocessingstep = n.getCollectionOfObjectValues<Sdkmessageprocessingstep>(createSdkmessageprocessingstepFromDiscriminatorValue); },
            "sdkmessagefilteridunique": (o, n) => { (o as unknown as Sdkmessagefilter).sdkmessagefilteridunique = n.getStringValue(); },
            "sdkmessageid": (o, n) => { (o as unknown as Sdkmessagefilter).sdkmessageid = n.getObjectValue<Sdkmessage>(createSdkmessageFromDiscriminatorValue); },
            "secondaryobjecttypecode": (o, n) => { (o as unknown as Sdkmessagefilter).secondaryobjecttypecode = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Sdkmessagefilter).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sdkmessagefilter).versionnumber = n.getNumberValue(); },
            "workflowsdkstepenabled": (o, n) => { (o as unknown as Sdkmessagefilter).workflowsdkstepenabled = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscustomprocessingstepallowed property value. 
     * @returns a boolean
     */
    public get iscustomprocessingstepallowed() {
        return this._iscustomprocessingstepallowed;
    };
    /**
     * Sets the iscustomprocessingstepallowed property value. 
     * @param value Value to set for the iscustomprocessingstepallowed property.
     */
    public set iscustomprocessingstepallowed(value: boolean | undefined) {
        this._iscustomprocessingstepallowed = value;
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
     * Gets the isvisible property value. 
     * @returns a boolean
     */
    public get isvisible() {
        return this._isvisible;
    };
    /**
     * Sets the isvisible property value. 
     * @param value Value to set for the isvisible property.
     */
    public set isvisible(value: boolean | undefined) {
        this._isvisible = value;
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
     * Gets the primaryobjecttypecode property value. 
     * @returns a string
     */
    public get primaryobjecttypecode() {
        return this._primaryobjecttypecode;
    };
    /**
     * Sets the primaryobjecttypecode property value. 
     * @param value Value to set for the primaryobjecttypecode property.
     */
    public set primaryobjecttypecode(value: string | undefined) {
        this._primaryobjecttypecode = value;
    };
    /**
     * Gets the restrictionlevel property value. 
     * @returns a integer
     */
    public get restrictionlevel() {
        return this._restrictionlevel;
    };
    /**
     * Sets the restrictionlevel property value. 
     * @param value Value to set for the restrictionlevel property.
     */
    public set restrictionlevel(value: number | undefined) {
        this._restrictionlevel = value;
    };
    /**
     * Gets the sdkmessagefilterid property value. 
     * @returns a string
     */
    public get sdkmessagefilterid() {
        return this._sdkmessagefilterid;
    };
    /**
     * Sets the sdkmessagefilterid property value. 
     * @param value Value to set for the sdkmessagefilterid property.
     */
    public set sdkmessagefilterid(value: string | undefined) {
        this._sdkmessagefilterid = value;
    };
    /**
     * Gets the sdkmessagefilterid_sdkmessageprocessingstep property value. 
     * @returns a sdkmessageprocessingstep
     */
    public get sdkmessagefilterid_sdkmessageprocessingstep() {
        return this._sdkmessagefilterid_sdkmessageprocessingstep;
    };
    /**
     * Sets the sdkmessagefilterid_sdkmessageprocessingstep property value. 
     * @param value Value to set for the sdkmessagefilterid_sdkmessageprocessingstep property.
     */
    public set sdkmessagefilterid_sdkmessageprocessingstep(value: Sdkmessageprocessingstep[] | undefined) {
        this._sdkmessagefilterid_sdkmessageprocessingstep = value;
    };
    /**
     * Gets the sdkmessagefilteridunique property value. 
     * @returns a string
     */
    public get sdkmessagefilteridunique() {
        return this._sdkmessagefilteridunique;
    };
    /**
     * Sets the sdkmessagefilteridunique property value. 
     * @param value Value to set for the sdkmessagefilteridunique property.
     */
    public set sdkmessagefilteridunique(value: string | undefined) {
        this._sdkmessagefilteridunique = value;
    };
    /**
     * Gets the sdkmessageid property value. 
     * @returns a sdkmessage
     */
    public get sdkmessageid() {
        return this._sdkmessageid;
    };
    /**
     * Sets the sdkmessageid property value. 
     * @param value Value to set for the sdkmessageid property.
     */
    public set sdkmessageid(value: Sdkmessage | undefined) {
        this._sdkmessageid = value;
    };
    /**
     * Gets the secondaryobjecttypecode property value. 
     * @returns a string
     */
    public get secondaryobjecttypecode() {
        return this._secondaryobjecttypecode;
    };
    /**
     * Sets the secondaryobjecttypecode property value. 
     * @param value Value to set for the secondaryobjecttypecode property.
     */
    public set secondaryobjecttypecode(value: string | undefined) {
        this._secondaryobjecttypecode = value;
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
        writer.writeStringValue("_sdkmessageid_value", this._sdkmessageid_value);
        writer.writeNumberValue("availability", this.availability);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("customizationlevel", this.customizationlevel);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("iscustomprocessingstepallowed", this.iscustomprocessingstepallowed);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isvisible", this.isvisible);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("primaryobjecttypecode", this.primaryobjecttypecode);
        writer.writeNumberValue("restrictionlevel", this.restrictionlevel);
        writer.writeStringValue("sdkmessagefilterid", this.sdkmessagefilterid);
        writer.writeCollectionOfObjectValues<Sdkmessageprocessingstep>("sdkmessagefilterid_sdkmessageprocessingstep", this.sdkmessagefilterid_sdkmessageprocessingstep);
        writer.writeStringValue("sdkmessagefilteridunique", this.sdkmessagefilteridunique);
        writer.writeObjectValue<Sdkmessage>("sdkmessageid", this.sdkmessageid);
        writer.writeStringValue("secondaryobjecttypecode", this.secondaryobjecttypecode);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeBooleanValue("workflowsdkstepenabled", this.workflowsdkstepenabled);
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
    /**
     * Gets the workflowsdkstepenabled property value. 
     * @returns a boolean
     */
    public get workflowsdkstepenabled() {
        return this._workflowsdkstepenabled;
    };
    /**
     * Sets the workflowsdkstepenabled property value. 
     * @param value Value to set for the workflowsdkstepenabled property.
     */
    public set workflowsdkstepenabled(value: boolean | undefined) {
        this._workflowsdkstepenabled = value;
    };
}
