import {createActivitypointerFromDiscriminatorValue} from './createActivitypointerFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Activitypointer, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Campaignactivityitem extends Crmbaseentity implements Parsable {
    private __campaignactivityid_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private _campaignactivityid?: Activitypointer | undefined;
    private _campaignactivityitem_AsyncOperations?: Asyncoperation[] | undefined;
    private _campaignactivityitem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _campaignactivityitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _campaignactivityitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _campaignactivityitemid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _itemid?: string | undefined;
    private _itemobjecttypecode?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _owningbusinessunit?: string | undefined;
    private _owninguser?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _campaignactivityid_value property value. 
     * @returns a string
     */
    public get _campaignactivityid_value() {
        return this.__campaignactivityid_value;
    };
    /**
     * Sets the _campaignactivityid_value property value. 
     * @param value Value to set for the _campaignactivityid_value property.
     */
    public set _campaignactivityid_value(value: string | undefined) {
        this.__campaignactivityid_value = value;
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
     * Gets the campaignactivityid property value. 
     * @returns a activitypointer
     */
    public get campaignactivityid() {
        return this._campaignactivityid;
    };
    /**
     * Sets the campaignactivityid property value. 
     * @param value Value to set for the campaignactivityid property.
     */
    public set campaignactivityid(value: Activitypointer | undefined) {
        this._campaignactivityid = value;
    };
    /**
     * Gets the campaignactivityitem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get campaignactivityitem_AsyncOperations() {
        return this._campaignactivityitem_AsyncOperations;
    };
    /**
     * Sets the campaignactivityitem_AsyncOperations property value. 
     * @param value Value to set for the campaignactivityitem_AsyncOperations property.
     */
    public set campaignactivityitem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._campaignactivityitem_AsyncOperations = value;
    };
    /**
     * Gets the campaignactivityitem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get campaignactivityitem_BulkDeleteFailures() {
        return this._campaignactivityitem_BulkDeleteFailures;
    };
    /**
     * Sets the campaignactivityitem_BulkDeleteFailures property value. 
     * @param value Value to set for the campaignactivityitem_BulkDeleteFailures property.
     */
    public set campaignactivityitem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._campaignactivityitem_BulkDeleteFailures = value;
    };
    /**
     * Gets the campaignactivityitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get campaignactivityitem_MailboxTrackingFolders() {
        return this._campaignactivityitem_MailboxTrackingFolders;
    };
    /**
     * Sets the campaignactivityitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the campaignactivityitem_MailboxTrackingFolders property.
     */
    public set campaignactivityitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._campaignactivityitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the campaignactivityitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get campaignactivityitem_PrincipalObjectAttributeAccesses() {
        return this._campaignactivityitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the campaignactivityitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the campaignactivityitem_PrincipalObjectAttributeAccesses property.
     */
    public set campaignactivityitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._campaignactivityitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the campaignactivityitemid property value. 
     * @returns a string
     */
    public get campaignactivityitemid() {
        return this._campaignactivityitemid;
    };
    /**
     * Sets the campaignactivityitemid property value. 
     * @param value Value to set for the campaignactivityitemid property.
     */
    public set campaignactivityitemid(value: string | undefined) {
        this._campaignactivityitemid = value;
    };
    /**
     * Instantiates a new campaignactivityitem and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_campaignactivityid_value": (o, n) => { (o as unknown as Campaignactivityitem)._campaignactivityid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Campaignactivityitem)._ownerid_value = n.getStringValue(); },
            "campaignactivityid": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityid = n.getObjectValue<Activitypointer>(createActivitypointerFromDiscriminatorValue); },
            "campaignactivityitem_AsyncOperations": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityitem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "campaignactivityitem_BulkDeleteFailures": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityitem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "campaignactivityitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "campaignactivityitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "campaignactivityitemid": (o, n) => { (o as unknown as Campaignactivityitem).campaignactivityitemid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Campaignactivityitem).importsequencenumber = n.getNumberValue(); },
            "itemid": (o, n) => { (o as unknown as Campaignactivityitem).itemid = n.getStringValue(); },
            "itemobjecttypecode": (o, n) => { (o as unknown as Campaignactivityitem).itemobjecttypecode = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Campaignactivityitem).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Campaignactivityitem).overriddencreatedon = n.getDateValue(); },
            "owningbusinessunit": (o, n) => { (o as unknown as Campaignactivityitem).owningbusinessunit = n.getStringValue(); },
            "owninguser": (o, n) => { (o as unknown as Campaignactivityitem).owninguser = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Campaignactivityitem).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Campaignactivityitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Campaignactivityitem).versionnumber = n.getNumberValue(); },
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
     * Gets the itemid property value. 
     * @returns a string
     */
    public get itemid() {
        return this._itemid;
    };
    /**
     * Sets the itemid property value. 
     * @param value Value to set for the itemid property.
     */
    public set itemid(value: string | undefined) {
        this._itemid = value;
    };
    /**
     * Gets the itemobjecttypecode property value. 
     * @returns a string
     */
    public get itemobjecttypecode() {
        return this._itemobjecttypecode;
    };
    /**
     * Sets the itemobjecttypecode property value. 
     * @param value Value to set for the itemobjecttypecode property.
     */
    public set itemobjecttypecode(value: string | undefined) {
        this._itemobjecttypecode = value;
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
     * Gets the owningbusinessunit property value. 
     * @returns a string
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: string | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a string
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: string | undefined) {
        this._owninguser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_campaignactivityid_value", this._campaignactivityid_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeObjectValue<Activitypointer>("campaignactivityid", this.campaignactivityid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("campaignactivityitem_AsyncOperations", this.campaignactivityitem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("campaignactivityitem_BulkDeleteFailures", this.campaignactivityitem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("campaignactivityitem_MailboxTrackingFolders", this.campaignactivityitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("campaignactivityitem_PrincipalObjectAttributeAccesses", this.campaignactivityitem_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("campaignactivityitemid", this.campaignactivityitemid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("itemid", this.itemid);
        writer.writeStringValue("itemobjecttypecode", this.itemobjecttypecode);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("owningbusinessunit", this.owningbusinessunit);
        writer.writeStringValue("owninguser", this.owninguser);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
