import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Systemuserauthorizationchangetracker extends Crmbaseentity implements Parsable {
    private _changedon?: Date | undefined;
    private _changedversionnumber?: number | undefined;
    private _computedon?: Date | undefined;
    private _computedversionnumber?: number | undefined;
    private _systemuserauthorizationchangetracker_AsyncOperations?: Asyncoperation[] | undefined;
    private _systemuserauthorizationchangetracker_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _systemuserauthorizationchangetracker_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _systemuserauthorizationchangetracker_ProcessSession?: Processsession[] | undefined;
    private _systemuserauthorizationchangetracker_SyncErrors?: Syncerror[] | undefined;
    private _systemuserid?: string | undefined;
    private _systemuserid_userauthztracker?: Systemuser | undefined;
    /**
     * Gets the changedon property value. 
     * @returns a Date
     */
    public get changedon() {
        return this._changedon;
    };
    /**
     * Sets the changedon property value. 
     * @param value Value to set for the changedon property.
     */
    public set changedon(value: Date | undefined) {
        this._changedon = value;
    };
    /**
     * Gets the changedversionnumber property value. 
     * @returns a int64
     */
    public get changedversionnumber() {
        return this._changedversionnumber;
    };
    /**
     * Sets the changedversionnumber property value. 
     * @param value Value to set for the changedversionnumber property.
     */
    public set changedversionnumber(value: number | undefined) {
        this._changedversionnumber = value;
    };
    /**
     * Gets the computedon property value. 
     * @returns a Date
     */
    public get computedon() {
        return this._computedon;
    };
    /**
     * Sets the computedon property value. 
     * @param value Value to set for the computedon property.
     */
    public set computedon(value: Date | undefined) {
        this._computedon = value;
    };
    /**
     * Gets the computedversionnumber property value. 
     * @returns a int64
     */
    public get computedversionnumber() {
        return this._computedversionnumber;
    };
    /**
     * Sets the computedversionnumber property value. 
     * @param value Value to set for the computedversionnumber property.
     */
    public set computedversionnumber(value: number | undefined) {
        this._computedversionnumber = value;
    };
    /**
     * Instantiates a new systemuserauthorizationchangetracker and sets the default values.
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
            "changedon": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).changedon = n.getDateValue(); },
            "changedversionnumber": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).changedversionnumber = n.getNumberValue(); },
            "computedon": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).computedon = n.getDateValue(); },
            "computedversionnumber": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).computedversionnumber = n.getNumberValue(); },
            "systemuserauthorizationchangetracker_AsyncOperations": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "systemuserauthorizationchangetracker_BulkDeleteFailures": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "systemuserauthorizationchangetracker_MailboxTrackingFolders": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "systemuserauthorizationchangetracker_ProcessSession": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "systemuserauthorizationchangetracker_SyncErrors": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserauthorizationchangetracker_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "systemuserid": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserid = n.getStringValue(); },
            "systemuserid_userauthztracker": (o, n) => { (o as unknown as Systemuserauthorizationchangetracker).systemuserid_userauthztracker = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("changedon", this.changedon);
        writer.writeNumberValue("changedversionnumber", this.changedversionnumber);
        writer.writeDateValue("computedon", this.computedon);
        writer.writeNumberValue("computedversionnumber", this.computedversionnumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("systemuserauthorizationchangetracker_AsyncOperations", this.systemuserauthorizationchangetracker_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("systemuserauthorizationchangetracker_BulkDeleteFailures", this.systemuserauthorizationchangetracker_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("systemuserauthorizationchangetracker_MailboxTrackingFolders", this.systemuserauthorizationchangetracker_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses", this.systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("systemuserauthorizationchangetracker_ProcessSession", this.systemuserauthorizationchangetracker_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("systemuserauthorizationchangetracker_SyncErrors", this.systemuserauthorizationchangetracker_SyncErrors);
        writer.writeStringValue("systemuserid", this.systemuserid);
        writer.writeObjectValue<Systemuser>("systemuserid_userauthztracker", this.systemuserid_userauthztracker);
    };
    /**
     * Gets the systemuserauthorizationchangetracker_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get systemuserauthorizationchangetracker_AsyncOperations() {
        return this._systemuserauthorizationchangetracker_AsyncOperations;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_AsyncOperations property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_AsyncOperations property.
     */
    public set systemuserauthorizationchangetracker_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._systemuserauthorizationchangetracker_AsyncOperations = value;
    };
    /**
     * Gets the systemuserauthorizationchangetracker_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get systemuserauthorizationchangetracker_BulkDeleteFailures() {
        return this._systemuserauthorizationchangetracker_BulkDeleteFailures;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_BulkDeleteFailures property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_BulkDeleteFailures property.
     */
    public set systemuserauthorizationchangetracker_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._systemuserauthorizationchangetracker_BulkDeleteFailures = value;
    };
    /**
     * Gets the systemuserauthorizationchangetracker_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get systemuserauthorizationchangetracker_MailboxTrackingFolders() {
        return this._systemuserauthorizationchangetracker_MailboxTrackingFolders;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_MailboxTrackingFolders property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_MailboxTrackingFolders property.
     */
    public set systemuserauthorizationchangetracker_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._systemuserauthorizationchangetracker_MailboxTrackingFolders = value;
    };
    /**
     * Gets the systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses() {
        return this._systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses property.
     */
    public set systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._systemuserauthorizationchangetracker_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the systemuserauthorizationchangetracker_ProcessSession property value. 
     * @returns a processsession
     */
    public get systemuserauthorizationchangetracker_ProcessSession() {
        return this._systemuserauthorizationchangetracker_ProcessSession;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_ProcessSession property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_ProcessSession property.
     */
    public set systemuserauthorizationchangetracker_ProcessSession(value: Processsession[] | undefined) {
        this._systemuserauthorizationchangetracker_ProcessSession = value;
    };
    /**
     * Gets the systemuserauthorizationchangetracker_SyncErrors property value. 
     * @returns a syncerror
     */
    public get systemuserauthorizationchangetracker_SyncErrors() {
        return this._systemuserauthorizationchangetracker_SyncErrors;
    };
    /**
     * Sets the systemuserauthorizationchangetracker_SyncErrors property value. 
     * @param value Value to set for the systemuserauthorizationchangetracker_SyncErrors property.
     */
    public set systemuserauthorizationchangetracker_SyncErrors(value: Syncerror[] | undefined) {
        this._systemuserauthorizationchangetracker_SyncErrors = value;
    };
    /**
     * Gets the systemuserid property value. 
     * @returns a string
     */
    public get systemuserid() {
        return this._systemuserid;
    };
    /**
     * Sets the systemuserid property value. 
     * @param value Value to set for the systemuserid property.
     */
    public set systemuserid(value: string | undefined) {
        this._systemuserid = value;
    };
    /**
     * Gets the systemuserid_userauthztracker property value. 
     * @returns a systemuser
     */
    public get systemuserid_userauthztracker() {
        return this._systemuserid_userauthztracker;
    };
    /**
     * Sets the systemuserid_userauthztracker property value. 
     * @param value Value to set for the systemuserid_userauthztracker property.
     */
    public set systemuserid_userauthztracker(value: Systemuser | undefined) {
        this._systemuserid_userauthztracker = value;
    };
}
