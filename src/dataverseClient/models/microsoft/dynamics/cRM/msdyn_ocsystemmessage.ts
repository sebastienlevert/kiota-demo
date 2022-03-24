import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_livechatconfigFromDiscriminatorValue} from './createMsdyn_livechatconfigFromDiscriminatorValue';
import {createMsdyn_oclanguageFromDiscriminatorValue} from './createMsdyn_oclanguageFromDiscriminatorValue';
import {createMsdyn_oclocalizationdataFromDiscriminatorValue} from './createMsdyn_oclocalizationdataFromDiscriminatorValue';
import {createMsdyn_ocoutboundconfigurationFromDiscriminatorValue} from './createMsdyn_ocoutboundconfigurationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_livechatconfig, Msdyn_oclanguage, Msdyn_oclocalizationdata, Msdyn_ocoutboundconfiguration, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ocsystemmessage extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_defaultlanguage_value?: string | undefined;
    private __msdyn_widgetid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_defaultlanguage?: Msdyn_oclanguage | undefined;
    private _msdyn_instanceid?: string | undefined;
    private _msdyn_messagedescription?: string | undefined;
    private _msdyn_messagereceiver?: number | undefined;
    private _msdyn_messagetemplatetrigger?: number | undefined;
    private _msdyn_messagetext?: string | undefined;
    private _msdyn_messagetype?: number | undefined;
    private _msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate?: Msdyn_ocoutboundconfiguration[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_ocsystemmessage_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ocsystemmessage_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ocsystemmessage_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsystemmessage_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ocsystemmessage_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ocsystemmessage_msdyn_oclocalizationdata?: Msdyn_oclocalizationdata[] | undefined;
    private _msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ocsystemmessage_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ocsystemmessage_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ocsystemmessageid?: string | undefined;
    private _msdyn_streamsource?: number | undefined;
    private _msdyn_systemmessageeventtype?: number | undefined;
    private _msdyn_widgetid?: Msdyn_livechatconfig | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_defaultlanguage_value property value. 
     * @returns a string
     */
    public get _msdyn_defaultlanguage_value() {
        return this.__msdyn_defaultlanguage_value;
    };
    /**
     * Sets the _msdyn_defaultlanguage_value property value. 
     * @param value Value to set for the _msdyn_defaultlanguage_value property.
     */
    public set _msdyn_defaultlanguage_value(value: string | undefined) {
        this.__msdyn_defaultlanguage_value = value;
    };
    /**
     * Gets the _msdyn_widgetid_value property value. 
     * @returns a string
     */
    public get _msdyn_widgetid_value() {
        return this.__msdyn_widgetid_value;
    };
    /**
     * Sets the _msdyn_widgetid_value property value. 
     * @param value Value to set for the _msdyn_widgetid_value property.
     */
    public set _msdyn_widgetid_value(value: string | undefined) {
        this.__msdyn_widgetid_value = value;
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
     * Instantiates a new msdyn_ocsystemmessage and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_defaultlanguage_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._msdyn_defaultlanguage_value = n.getStringValue(); },
            "_msdyn_widgetid_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._msdyn_widgetid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_ocsystemmessage)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_defaultlanguage": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_defaultlanguage = n.getObjectValue<Msdyn_oclanguage>(createMsdyn_oclanguageFromDiscriminatorValue); },
            "msdyn_instanceid": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_instanceid = n.getStringValue(); },
            "msdyn_messagedescription": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_messagedescription = n.getStringValue(); },
            "msdyn_messagereceiver": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_messagereceiver = n.getNumberValue(); },
            "msdyn_messagetemplatetrigger": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_messagetemplatetrigger = n.getNumberValue(); },
            "msdyn_messagetext": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_messagetext = n.getStringValue(); },
            "msdyn_messagetype": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_messagetype = n.getNumberValue(); },
            "msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate = n.getCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>(createMsdyn_ocoutboundconfigurationFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_name = n.getStringValue(); },
            "msdyn_ocsystemmessage_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_msdyn_oclocalizationdata": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_msdyn_oclocalizationdata = n.getCollectionOfObjectValues<Msdyn_oclocalizationdata>(createMsdyn_oclocalizationdataFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_ProcessSession": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ocsystemmessage_SyncErrors": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessage_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ocsystemmessageid": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_ocsystemmessageid = n.getStringValue(); },
            "msdyn_streamsource": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_streamsource = n.getNumberValue(); },
            "msdyn_systemmessageeventtype": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_systemmessageeventtype = n.getNumberValue(); },
            "msdyn_widgetid": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).msdyn_widgetid = n.getObjectValue<Msdyn_livechatconfig>(createMsdyn_livechatconfigFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ocsystemmessage).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_defaultlanguage property value. 
     * @returns a msdyn_oclanguage
     */
    public get msdyn_defaultlanguage() {
        return this._msdyn_defaultlanguage;
    };
    /**
     * Sets the msdyn_defaultlanguage property value. 
     * @param value Value to set for the msdyn_defaultlanguage property.
     */
    public set msdyn_defaultlanguage(value: Msdyn_oclanguage | undefined) {
        this._msdyn_defaultlanguage = value;
    };
    /**
     * Gets the msdyn_instanceid property value. 
     * @returns a string
     */
    public get msdyn_instanceid() {
        return this._msdyn_instanceid;
    };
    /**
     * Sets the msdyn_instanceid property value. 
     * @param value Value to set for the msdyn_instanceid property.
     */
    public set msdyn_instanceid(value: string | undefined) {
        this._msdyn_instanceid = value;
    };
    /**
     * Gets the msdyn_messagedescription property value. 
     * @returns a string
     */
    public get msdyn_messagedescription() {
        return this._msdyn_messagedescription;
    };
    /**
     * Sets the msdyn_messagedescription property value. 
     * @param value Value to set for the msdyn_messagedescription property.
     */
    public set msdyn_messagedescription(value: string | undefined) {
        this._msdyn_messagedescription = value;
    };
    /**
     * Gets the msdyn_messagereceiver property value. 
     * @returns a integer
     */
    public get msdyn_messagereceiver() {
        return this._msdyn_messagereceiver;
    };
    /**
     * Sets the msdyn_messagereceiver property value. 
     * @param value Value to set for the msdyn_messagereceiver property.
     */
    public set msdyn_messagereceiver(value: number | undefined) {
        this._msdyn_messagereceiver = value;
    };
    /**
     * Gets the msdyn_messagetemplatetrigger property value. 
     * @returns a integer
     */
    public get msdyn_messagetemplatetrigger() {
        return this._msdyn_messagetemplatetrigger;
    };
    /**
     * Sets the msdyn_messagetemplatetrigger property value. 
     * @param value Value to set for the msdyn_messagetemplatetrigger property.
     */
    public set msdyn_messagetemplatetrigger(value: number | undefined) {
        this._msdyn_messagetemplatetrigger = value;
    };
    /**
     * Gets the msdyn_messagetext property value. 
     * @returns a string
     */
    public get msdyn_messagetext() {
        return this._msdyn_messagetext;
    };
    /**
     * Sets the msdyn_messagetext property value. 
     * @param value Value to set for the msdyn_messagetext property.
     */
    public set msdyn_messagetext(value: string | undefined) {
        this._msdyn_messagetext = value;
    };
    /**
     * Gets the msdyn_messagetype property value. 
     * @returns a integer
     */
    public get msdyn_messagetype() {
        return this._msdyn_messagetype;
    };
    /**
     * Sets the msdyn_messagetype property value. 
     * @param value Value to set for the msdyn_messagetype property.
     */
    public set msdyn_messagetype(value: number | undefined) {
        this._msdyn_messagetype = value;
    };
    /**
     * Gets the msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate property value. 
     * @returns a msdyn_ocoutboundconfiguration
     */
    public get msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate() {
        return this._msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate;
    };
    /**
     * Sets the msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate property value. 
     * @param value Value to set for the msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate property.
     */
    public set msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate(value: Msdyn_ocoutboundconfiguration[] | undefined) {
        this._msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate = value;
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
     * Gets the msdyn_ocsystemmessage_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ocsystemmessage_AsyncOperations() {
        return this._msdyn_ocsystemmessage_AsyncOperations;
    };
    /**
     * Sets the msdyn_ocsystemmessage_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_AsyncOperations property.
     */
    public set msdyn_ocsystemmessage_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ocsystemmessage_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ocsystemmessage_BulkDeleteFailures() {
        return this._msdyn_ocsystemmessage_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ocsystemmessage_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_BulkDeleteFailures property.
     */
    public set msdyn_ocsystemmessage_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ocsystemmessage_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsystemmessage_DuplicateBaseRecord() {
        return this._msdyn_ocsystemmessage_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ocsystemmessage_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_DuplicateBaseRecord property.
     */
    public set msdyn_ocsystemmessage_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsystemmessage_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ocsystemmessage_DuplicateMatchingRecord() {
        return this._msdyn_ocsystemmessage_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ocsystemmessage_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_DuplicateMatchingRecord property.
     */
    public set msdyn_ocsystemmessage_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ocsystemmessage_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ocsystemmessage_MailboxTrackingFolders() {
        return this._msdyn_ocsystemmessage_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ocsystemmessage_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_MailboxTrackingFolders property.
     */
    public set msdyn_ocsystemmessage_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ocsystemmessage_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_msdyn_oclocalizationdata property value. 
     * @returns a msdyn_oclocalizationdata
     */
    public get msdyn_ocsystemmessage_msdyn_oclocalizationdata() {
        return this._msdyn_ocsystemmessage_msdyn_oclocalizationdata;
    };
    /**
     * Sets the msdyn_ocsystemmessage_msdyn_oclocalizationdata property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_msdyn_oclocalizationdata property.
     */
    public set msdyn_ocsystemmessage_msdyn_oclocalizationdata(value: Msdyn_oclocalizationdata[] | undefined) {
        this._msdyn_ocsystemmessage_msdyn_oclocalizationdata = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ocsystemmessage_ProcessSession() {
        return this._msdyn_ocsystemmessage_ProcessSession;
    };
    /**
     * Sets the msdyn_ocsystemmessage_ProcessSession property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_ProcessSession property.
     */
    public set msdyn_ocsystemmessage_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ocsystemmessage_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ocsystemmessage_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ocsystemmessage_SyncErrors() {
        return this._msdyn_ocsystemmessage_SyncErrors;
    };
    /**
     * Sets the msdyn_ocsystemmessage_SyncErrors property value. 
     * @param value Value to set for the msdyn_ocsystemmessage_SyncErrors property.
     */
    public set msdyn_ocsystemmessage_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ocsystemmessage_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ocsystemmessageid property value. 
     * @returns a string
     */
    public get msdyn_ocsystemmessageid() {
        return this._msdyn_ocsystemmessageid;
    };
    /**
     * Sets the msdyn_ocsystemmessageid property value. 
     * @param value Value to set for the msdyn_ocsystemmessageid property.
     */
    public set msdyn_ocsystemmessageid(value: string | undefined) {
        this._msdyn_ocsystemmessageid = value;
    };
    /**
     * Gets the msdyn_streamsource property value. 
     * @returns a integer
     */
    public get msdyn_streamsource() {
        return this._msdyn_streamsource;
    };
    /**
     * Sets the msdyn_streamsource property value. 
     * @param value Value to set for the msdyn_streamsource property.
     */
    public set msdyn_streamsource(value: number | undefined) {
        this._msdyn_streamsource = value;
    };
    /**
     * Gets the msdyn_systemmessageeventtype property value. 
     * @returns a integer
     */
    public get msdyn_systemmessageeventtype() {
        return this._msdyn_systemmessageeventtype;
    };
    /**
     * Sets the msdyn_systemmessageeventtype property value. 
     * @param value Value to set for the msdyn_systemmessageeventtype property.
     */
    public set msdyn_systemmessageeventtype(value: number | undefined) {
        this._msdyn_systemmessageeventtype = value;
    };
    /**
     * Gets the msdyn_widgetid property value. 
     * @returns a msdyn_livechatconfig
     */
    public get msdyn_widgetid() {
        return this._msdyn_widgetid;
    };
    /**
     * Sets the msdyn_widgetid property value. 
     * @param value Value to set for the msdyn_widgetid property.
     */
    public set msdyn_widgetid(value: Msdyn_livechatconfig | undefined) {
        this._msdyn_widgetid = value;
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
        writer.writeStringValue("_msdyn_defaultlanguage_value", this._msdyn_defaultlanguage_value);
        writer.writeStringValue("_msdyn_widgetid_value", this._msdyn_widgetid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Msdyn_oclanguage>("msdyn_defaultlanguage", this.msdyn_defaultlanguage);
        writer.writeStringValue("msdyn_instanceid", this.msdyn_instanceid);
        writer.writeStringValue("msdyn_messagedescription", this.msdyn_messagedescription);
        writer.writeNumberValue("msdyn_messagereceiver", this.msdyn_messagereceiver);
        writer.writeNumberValue("msdyn_messagetemplatetrigger", this.msdyn_messagetemplatetrigger);
        writer.writeStringValue("msdyn_messagetext", this.msdyn_messagetext);
        writer.writeNumberValue("msdyn_messagetype", this.msdyn_messagetype);
        writer.writeCollectionOfObjectValues<Msdyn_ocoutboundconfiguration>("msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate", this.msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ocsystemmessage_AsyncOperations", this.msdyn_ocsystemmessage_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ocsystemmessage_BulkDeleteFailures", this.msdyn_ocsystemmessage_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsystemmessage_DuplicateBaseRecord", this.msdyn_ocsystemmessage_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ocsystemmessage_DuplicateMatchingRecord", this.msdyn_ocsystemmessage_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ocsystemmessage_MailboxTrackingFolders", this.msdyn_ocsystemmessage_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_oclocalizationdata>("msdyn_ocsystemmessage_msdyn_oclocalizationdata", this.msdyn_ocsystemmessage_msdyn_oclocalizationdata);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses", this.msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ocsystemmessage_ProcessSession", this.msdyn_ocsystemmessage_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ocsystemmessage_SyncErrors", this.msdyn_ocsystemmessage_SyncErrors);
        writer.writeStringValue("msdyn_ocsystemmessageid", this.msdyn_ocsystemmessageid);
        writer.writeNumberValue("msdyn_streamsource", this.msdyn_streamsource);
        writer.writeNumberValue("msdyn_systemmessageeventtype", this.msdyn_systemmessageeventtype);
        writer.writeObjectValue<Msdyn_livechatconfig>("msdyn_widgetid", this.msdyn_widgetid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
