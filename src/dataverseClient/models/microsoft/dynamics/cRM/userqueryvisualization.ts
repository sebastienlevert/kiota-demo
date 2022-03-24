import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createWebresourceFromDiscriminatorValue} from './createWebresourceFromDiscriminatorValue';
import {Businessunit, Crmbaseentity, Principal, Syncerror, Systemuser, Team, Webresource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Userqueryvisualization extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __webresourceid_value?: string | undefined;
    private _charttype?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datadescription?: string | undefined;
    private _description?: string | undefined;
    private _isdefault?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _presentationdescription?: string | undefined;
    private _primaryentitytypecode?: string | undefined;
    private _userQueryVisualization_SyncErrors?: Syncerror[] | undefined;
    private _userqueryvisualizationid?: string | undefined;
    private _versionnumber?: number | undefined;
    private _webresourceid?: Webresource | undefined;
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
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
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
     * Gets the _webresourceid_value property value. 
     * @returns a string
     */
    public get _webresourceid_value() {
        return this.__webresourceid_value;
    };
    /**
     * Sets the _webresourceid_value property value. 
     * @param value Value to set for the _webresourceid_value property.
     */
    public set _webresourceid_value(value: string | undefined) {
        this.__webresourceid_value = value;
    };
    /**
     * Gets the charttype property value. 
     * @returns a integer
     */
    public get charttype() {
        return this._charttype;
    };
    /**
     * Sets the charttype property value. 
     * @param value Value to set for the charttype property.
     */
    public set charttype(value: number | undefined) {
        this._charttype = value;
    };
    /**
     * Instantiates a new userqueryvisualization and sets the default values.
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
     * Gets the datadescription property value. 
     * @returns a string
     */
    public get datadescription() {
        return this._datadescription;
    };
    /**
     * Sets the datadescription property value. 
     * @param value Value to set for the datadescription property.
     */
    public set datadescription(value: string | undefined) {
        this._datadescription = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Userqueryvisualization)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Userqueryvisualization)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Userqueryvisualization)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Userqueryvisualization)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Userqueryvisualization)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Userqueryvisualization)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Userqueryvisualization)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Userqueryvisualization)._owninguser_value = n.getStringValue(); },
            "_webresourceid_value": (o, n) => { (o as unknown as Userqueryvisualization)._webresourceid_value = n.getStringValue(); },
            "charttype": (o, n) => { (o as unknown as Userqueryvisualization).charttype = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Userqueryvisualization).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Userqueryvisualization).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Userqueryvisualization).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datadescription": (o, n) => { (o as unknown as Userqueryvisualization).datadescription = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Userqueryvisualization).description = n.getStringValue(); },
            "isdefault": (o, n) => { (o as unknown as Userqueryvisualization).isdefault = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Userqueryvisualization).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Userqueryvisualization).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Userqueryvisualization).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Userqueryvisualization).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Userqueryvisualization).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Userqueryvisualization).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Userqueryvisualization).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Userqueryvisualization).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "presentationdescription": (o, n) => { (o as unknown as Userqueryvisualization).presentationdescription = n.getStringValue(); },
            "primaryentitytypecode": (o, n) => { (o as unknown as Userqueryvisualization).primaryentitytypecode = n.getStringValue(); },
            "userQueryVisualization_SyncErrors": (o, n) => { (o as unknown as Userqueryvisualization).userQueryVisualization_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "userqueryvisualizationid": (o, n) => { (o as unknown as Userqueryvisualization).userqueryvisualizationid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Userqueryvisualization).versionnumber = n.getNumberValue(); },
            "webresourceid": (o, n) => { (o as unknown as Userqueryvisualization).webresourceid = n.getObjectValue<Webresource>(createWebresourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isdefault property value. 
     * @returns a boolean
     */
    public get isdefault() {
        return this._isdefault;
    };
    /**
     * Sets the isdefault property value. 
     * @param value Value to set for the isdefault property.
     */
    public set isdefault(value: boolean | undefined) {
        this._isdefault = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
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
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the presentationdescription property value. 
     * @returns a string
     */
    public get presentationdescription() {
        return this._presentationdescription;
    };
    /**
     * Sets the presentationdescription property value. 
     * @param value Value to set for the presentationdescription property.
     */
    public set presentationdescription(value: string | undefined) {
        this._presentationdescription = value;
    };
    /**
     * Gets the primaryentitytypecode property value. 
     * @returns a string
     */
    public get primaryentitytypecode() {
        return this._primaryentitytypecode;
    };
    /**
     * Sets the primaryentitytypecode property value. 
     * @param value Value to set for the primaryentitytypecode property.
     */
    public set primaryentitytypecode(value: string | undefined) {
        this._primaryentitytypecode = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_webresourceid_value", this._webresourceid_value);
        writer.writeNumberValue("charttype", this.charttype);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("datadescription", this.datadescription);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("isdefault", this.isdefault);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("presentationdescription", this.presentationdescription);
        writer.writeStringValue("primaryentitytypecode", this.primaryentitytypecode);
        writer.writeCollectionOfObjectValues<Syncerror>("userQueryVisualization_SyncErrors", this.userQueryVisualization_SyncErrors);
        writer.writeStringValue("userqueryvisualizationid", this.userqueryvisualizationid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeObjectValue<Webresource>("webresourceid", this.webresourceid);
    };
    /**
     * Gets the userQueryVisualization_SyncErrors property value. 
     * @returns a syncerror
     */
    public get userQueryVisualization_SyncErrors() {
        return this._userQueryVisualization_SyncErrors;
    };
    /**
     * Sets the userQueryVisualization_SyncErrors property value. 
     * @param value Value to set for the UserQueryVisualization_SyncErrors property.
     */
    public set userQueryVisualization_SyncErrors(value: Syncerror[] | undefined) {
        this._userQueryVisualization_SyncErrors = value;
    };
    /**
     * Gets the userqueryvisualizationid property value. 
     * @returns a string
     */
    public get userqueryvisualizationid() {
        return this._userqueryvisualizationid;
    };
    /**
     * Sets the userqueryvisualizationid property value. 
     * @param value Value to set for the userqueryvisualizationid property.
     */
    public set userqueryvisualizationid(value: string | undefined) {
        this._userqueryvisualizationid = value;
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
     * Gets the webresourceid property value. 
     * @returns a webresource
     */
    public get webresourceid() {
        return this._webresourceid;
    };
    /**
     * Sets the webresourceid property value. 
     * @param value Value to set for the webresourceid property.
     */
    public set webresourceid(value: Webresource | undefined) {
        this._webresourceid = value;
    };
}
