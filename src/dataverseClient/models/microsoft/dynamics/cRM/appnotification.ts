import {createAppmoduleFromDiscriminatorValue} from './createAppmoduleFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Appmodule, Businessunit, Crmbaseentity, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Appnotification extends Crmbaseentity implements Parsable {
    private __appmoduleid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _appModuleId?: Appmodule | undefined;
    private _appnotificationid?: string | undefined;
    private _body?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _icontype?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _partitionid?: string | undefined;
    private _priority?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _title?: string | undefined;
    private _toasttype?: number | undefined;
    private _ttlinseconds?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _appmoduleid_value property value. 
     * @returns a string
     */
    public get _appmoduleid_value() {
        return this.__appmoduleid_value;
    };
    /**
     * Sets the _appmoduleid_value property value. 
     * @param value Value to set for the _appmoduleid_value property.
     */
    public set _appmoduleid_value(value: string | undefined) {
        this.__appmoduleid_value = value;
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
     * Gets the appModuleId property value. 
     * @returns a appmodule
     */
    public get appModuleId() {
        return this._appModuleId;
    };
    /**
     * Sets the appModuleId property value. 
     * @param value Value to set for the AppModuleId property.
     */
    public set appModuleId(value: Appmodule | undefined) {
        this._appModuleId = value;
    };
    /**
     * Gets the appnotificationid property value. 
     * @returns a string
     */
    public get appnotificationid() {
        return this._appnotificationid;
    };
    /**
     * Sets the appnotificationid property value. 
     * @param value Value to set for the appnotificationid property.
     */
    public set appnotificationid(value: string | undefined) {
        this._appnotificationid = value;
    };
    /**
     * Gets the body property value. 
     * @returns a string
     */
    public get body() {
        return this._body;
    };
    /**
     * Sets the body property value. 
     * @param value Value to set for the body property.
     */
    public set body(value: string | undefined) {
        this._body = value;
    };
    /**
     * Instantiates a new appnotification and sets the default values.
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
     * Gets the data property value. 
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_appmoduleid_value": (o, n) => { (o as unknown as Appnotification)._appmoduleid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Appnotification)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Appnotification)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Appnotification)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Appnotification)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Appnotification)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Appnotification)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Appnotification)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Appnotification)._owninguser_value = n.getStringValue(); },
            "appModuleId": (o, n) => { (o as unknown as Appnotification).appModuleId = n.getObjectValue<Appmodule>(createAppmoduleFromDiscriminatorValue); },
            "appnotificationid": (o, n) => { (o as unknown as Appnotification).appnotificationid = n.getStringValue(); },
            "body": (o, n) => { (o as unknown as Appnotification).body = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Appnotification).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Appnotification).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Appnotification).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Appnotification).data = n.getStringValue(); },
            "icontype": (o, n) => { (o as unknown as Appnotification).icontype = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Appnotification).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Appnotification).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Appnotification).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Appnotification).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Appnotification).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Appnotification).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Appnotification).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Appnotification).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Appnotification).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "partitionid": (o, n) => { (o as unknown as Appnotification).partitionid = n.getStringValue(); },
            "priority": (o, n) => { (o as unknown as Appnotification).priority = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Appnotification).timezoneruleversionnumber = n.getNumberValue(); },
            "title": (o, n) => { (o as unknown as Appnotification).title = n.getStringValue(); },
            "toasttype": (o, n) => { (o as unknown as Appnotification).toasttype = n.getNumberValue(); },
            "ttlinseconds": (o, n) => { (o as unknown as Appnotification).ttlinseconds = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Appnotification).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Appnotification).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the icontype property value. 
     * @returns a integer
     */
    public get icontype() {
        return this._icontype;
    };
    /**
     * Sets the icontype property value. 
     * @param value Value to set for the icontype property.
     */
    public set icontype(value: number | undefined) {
        this._icontype = value;
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
     * Gets the partitionid property value. 
     * @returns a string
     */
    public get partitionid() {
        return this._partitionid;
    };
    /**
     * Sets the partitionid property value. 
     * @param value Value to set for the partitionid property.
     */
    public set partitionid(value: string | undefined) {
        this._partitionid = value;
    };
    /**
     * Gets the priority property value. 
     * @returns a integer
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. 
     * @param value Value to set for the priority property.
     */
    public set priority(value: number | undefined) {
        this._priority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_appmoduleid_value", this._appmoduleid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Appmodule>("appModuleId", this.appModuleId);
        writer.writeStringValue("appnotificationid", this.appnotificationid);
        writer.writeStringValue("body", this.body);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeNumberValue("icontype", this.icontype);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("partitionid", this.partitionid);
        writer.writeNumberValue("priority", this.priority);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("toasttype", this.toasttype);
        writer.writeNumberValue("ttlinseconds", this.ttlinseconds);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the title property value. 
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. 
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the toasttype property value. 
     * @returns a integer
     */
    public get toasttype() {
        return this._toasttype;
    };
    /**
     * Sets the toasttype property value. 
     * @param value Value to set for the toasttype property.
     */
    public set toasttype(value: number | undefined) {
        this._toasttype = value;
    };
    /**
     * Gets the ttlinseconds property value. 
     * @returns a integer
     */
    public get ttlinseconds() {
        return this._ttlinseconds;
    };
    /**
     * Sets the ttlinseconds property value. 
     * @param value Value to set for the ttlinseconds property.
     */
    public set ttlinseconds(value: number | undefined) {
        this._ttlinseconds = value;
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
