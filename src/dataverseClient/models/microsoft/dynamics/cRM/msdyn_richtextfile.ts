import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createFileattachmentFromDiscriminatorValue} from './createFileattachmentFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Fileattachment, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_richtextfile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_fileblob?: string | undefined;
    private _msdyn_fileblob_name?: string | undefined;
    private _msdyn_imageblob?: string | undefined;
    private _msdyn_imageblob_timestamp?: number | undefined;
    private _msdyn_imageblob_url?: string | undefined;
    private _msdyn_imageblobid?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_parententity_fieldname?: string | undefined;
    private _msdyn_parententityname?: string | undefined;
    private _msdyn_parentid?: string | undefined;
    private _msdyn_richtextfile_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_richtextfile_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_richtextfile_FileAttachments?: Fileattachment[] | undefined;
    private _msdyn_richtextfile_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_richtextfile_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_richtextfile_ProcessSession?: Processsession[] | undefined;
    private _msdyn_richtextfile_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_richtextfileid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Instantiates a new msdyn_richtextfile and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_richtextfile)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_richtextfile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_richtextfile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_richtextfile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_richtextfile).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_richtextfile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_richtextfile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_richtextfile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_fileblob": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_fileblob = n.getStringValue(); },
            "msdyn_fileblob_name": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_fileblob_name = n.getStringValue(); },
            "msdyn_imageblob": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_imageblob = n.getStringValue(); },
            "msdyn_imageblob_timestamp": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_imageblob_timestamp = n.getNumberValue(); },
            "msdyn_imageblob_url": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_imageblob_url = n.getStringValue(); },
            "msdyn_imageblobid": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_imageblobid = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_name = n.getStringValue(); },
            "msdyn_parententity_fieldname": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_parententity_fieldname = n.getStringValue(); },
            "msdyn_parententityname": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_parententityname = n.getStringValue(); },
            "msdyn_parentid": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_parentid = n.getStringValue(); },
            "msdyn_richtextfile_AsyncOperations": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_richtextfile_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_richtextfile_FileAttachments": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_FileAttachments = n.getCollectionOfObjectValues<Fileattachment>(createFileattachmentFromDiscriminatorValue); },
            "msdyn_richtextfile_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_richtextfile_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_richtextfile_ProcessSession": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_richtextfile_SyncErrors": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_richtextfileid": (o, n) => { (o as unknown as Msdyn_richtextfile).msdyn_richtextfileid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_richtextfile).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_richtextfile).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_richtextfile).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_richtextfile).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_richtextfile).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_richtextfile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_richtextfile).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_richtextfile).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_richtextfile).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_richtextfile).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_fileblob property value. 
     * @returns a binary
     */
    public get msdyn_fileblob() {
        return this._msdyn_fileblob;
    };
    /**
     * Sets the msdyn_fileblob property value. 
     * @param value Value to set for the msdyn_fileblob property.
     */
    public set msdyn_fileblob(value: string | undefined) {
        this._msdyn_fileblob = value;
    };
    /**
     * Gets the msdyn_fileblob_name property value. 
     * @returns a string
     */
    public get msdyn_fileblob_name() {
        return this._msdyn_fileblob_name;
    };
    /**
     * Sets the msdyn_fileblob_name property value. 
     * @param value Value to set for the msdyn_fileblob_name property.
     */
    public set msdyn_fileblob_name(value: string | undefined) {
        this._msdyn_fileblob_name = value;
    };
    /**
     * Gets the msdyn_imageblob property value. 
     * @returns a binary
     */
    public get msdyn_imageblob() {
        return this._msdyn_imageblob;
    };
    /**
     * Sets the msdyn_imageblob property value. 
     * @param value Value to set for the msdyn_imageblob property.
     */
    public set msdyn_imageblob(value: string | undefined) {
        this._msdyn_imageblob = value;
    };
    /**
     * Gets the msdyn_imageblob_timestamp property value. 
     * @returns a int64
     */
    public get msdyn_imageblob_timestamp() {
        return this._msdyn_imageblob_timestamp;
    };
    /**
     * Sets the msdyn_imageblob_timestamp property value. 
     * @param value Value to set for the msdyn_imageblob_timestamp property.
     */
    public set msdyn_imageblob_timestamp(value: number | undefined) {
        this._msdyn_imageblob_timestamp = value;
    };
    /**
     * Gets the msdyn_imageblob_url property value. 
     * @returns a string
     */
    public get msdyn_imageblob_url() {
        return this._msdyn_imageblob_url;
    };
    /**
     * Sets the msdyn_imageblob_url property value. 
     * @param value Value to set for the msdyn_imageblob_url property.
     */
    public set msdyn_imageblob_url(value: string | undefined) {
        this._msdyn_imageblob_url = value;
    };
    /**
     * Gets the msdyn_imageblobid property value. 
     * @returns a string
     */
    public get msdyn_imageblobid() {
        return this._msdyn_imageblobid;
    };
    /**
     * Sets the msdyn_imageblobid property value. 
     * @param value Value to set for the msdyn_imageblobid property.
     */
    public set msdyn_imageblobid(value: string | undefined) {
        this._msdyn_imageblobid = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_parententity_fieldname property value. 
     * @returns a string
     */
    public get msdyn_parententity_fieldname() {
        return this._msdyn_parententity_fieldname;
    };
    /**
     * Sets the msdyn_parententity_fieldname property value. 
     * @param value Value to set for the msdyn_parententity_fieldname property.
     */
    public set msdyn_parententity_fieldname(value: string | undefined) {
        this._msdyn_parententity_fieldname = value;
    };
    /**
     * Gets the msdyn_parententityname property value. 
     * @returns a string
     */
    public get msdyn_parententityname() {
        return this._msdyn_parententityname;
    };
    /**
     * Sets the msdyn_parententityname property value. 
     * @param value Value to set for the msdyn_parententityname property.
     */
    public set msdyn_parententityname(value: string | undefined) {
        this._msdyn_parententityname = value;
    };
    /**
     * Gets the msdyn_parentid property value. 
     * @returns a string
     */
    public get msdyn_parentid() {
        return this._msdyn_parentid;
    };
    /**
     * Sets the msdyn_parentid property value. 
     * @param value Value to set for the msdyn_parentid property.
     */
    public set msdyn_parentid(value: string | undefined) {
        this._msdyn_parentid = value;
    };
    /**
     * Gets the msdyn_richtextfile_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_richtextfile_AsyncOperations() {
        return this._msdyn_richtextfile_AsyncOperations;
    };
    /**
     * Sets the msdyn_richtextfile_AsyncOperations property value. 
     * @param value Value to set for the msdyn_richtextfile_AsyncOperations property.
     */
    public set msdyn_richtextfile_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_richtextfile_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_richtextfile_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_richtextfile_BulkDeleteFailures() {
        return this._msdyn_richtextfile_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_richtextfile_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_richtextfile_BulkDeleteFailures property.
     */
    public set msdyn_richtextfile_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_richtextfile_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_richtextfile_FileAttachments property value. 
     * @returns a fileattachment
     */
    public get msdyn_richtextfile_FileAttachments() {
        return this._msdyn_richtextfile_FileAttachments;
    };
    /**
     * Sets the msdyn_richtextfile_FileAttachments property value. 
     * @param value Value to set for the msdyn_richtextfile_FileAttachments property.
     */
    public set msdyn_richtextfile_FileAttachments(value: Fileattachment[] | undefined) {
        this._msdyn_richtextfile_FileAttachments = value;
    };
    /**
     * Gets the msdyn_richtextfile_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_richtextfile_MailboxTrackingFolders() {
        return this._msdyn_richtextfile_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_richtextfile_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_richtextfile_MailboxTrackingFolders property.
     */
    public set msdyn_richtextfile_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_richtextfile_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_richtextfile_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_richtextfile_PrincipalObjectAttributeAccesses() {
        return this._msdyn_richtextfile_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_richtextfile_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_richtextfile_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_richtextfile_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_richtextfile_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_richtextfile_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_richtextfile_ProcessSession() {
        return this._msdyn_richtextfile_ProcessSession;
    };
    /**
     * Sets the msdyn_richtextfile_ProcessSession property value. 
     * @param value Value to set for the msdyn_richtextfile_ProcessSession property.
     */
    public set msdyn_richtextfile_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_richtextfile_ProcessSession = value;
    };
    /**
     * Gets the msdyn_richtextfile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_richtextfile_SyncErrors() {
        return this._msdyn_richtextfile_SyncErrors;
    };
    /**
     * Sets the msdyn_richtextfile_SyncErrors property value. 
     * @param value Value to set for the msdyn_richtextfile_SyncErrors property.
     */
    public set msdyn_richtextfile_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_richtextfile_SyncErrors = value;
    };
    /**
     * Gets the msdyn_richtextfileid property value. 
     * @returns a string
     */
    public get msdyn_richtextfileid() {
        return this._msdyn_richtextfileid;
    };
    /**
     * Sets the msdyn_richtextfileid property value. 
     * @param value Value to set for the msdyn_richtextfileid property.
     */
    public set msdyn_richtextfileid(value: string | undefined) {
        this._msdyn_richtextfileid = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_fileblob", this.msdyn_fileblob);
        writer.writeStringValue("msdyn_fileblob_name", this.msdyn_fileblob_name);
        writer.writeStringValue("msdyn_imageblob", this.msdyn_imageblob);
        writer.writeNumberValue("msdyn_imageblob_timestamp", this.msdyn_imageblob_timestamp);
        writer.writeStringValue("msdyn_imageblob_url", this.msdyn_imageblob_url);
        writer.writeStringValue("msdyn_imageblobid", this.msdyn_imageblobid);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_parententity_fieldname", this.msdyn_parententity_fieldname);
        writer.writeStringValue("msdyn_parententityname", this.msdyn_parententityname);
        writer.writeStringValue("msdyn_parentid", this.msdyn_parentid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_richtextfile_AsyncOperations", this.msdyn_richtextfile_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_richtextfile_BulkDeleteFailures", this.msdyn_richtextfile_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Fileattachment>("msdyn_richtextfile_FileAttachments", this.msdyn_richtextfile_FileAttachments);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_richtextfile_MailboxTrackingFolders", this.msdyn_richtextfile_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_richtextfile_PrincipalObjectAttributeAccesses", this.msdyn_richtextfile_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_richtextfile_ProcessSession", this.msdyn_richtextfile_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_richtextfile_SyncErrors", this.msdyn_richtextfile_SyncErrors);
        writer.writeStringValue("msdyn_richtextfileid", this.msdyn_richtextfileid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
