import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import {createKbarticlecommentFromDiscriminatorValue} from './createKbarticlecommentFromDiscriminatorValue';
import {createKbarticletemplateFromDiscriminatorValue} from './createKbarticletemplateFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSubjectFromDiscriminatorValue} from './createSubjectFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Incident, Kbarticlecomment, Kbarticletemplate, Organization, Principalobjectattributeaccess, Processsession, Sharepointdocumentlocation, Subject, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Kbarticle extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __kbarticletemplateid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __subjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _articlexml?: string | undefined;
    private _comments?: string | undefined;
    private _content?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _kbArticle_Annotation?: Annotation[] | undefined;
    private _kbArticle_AsyncOperations?: Asyncoperation[] | undefined;
    private _kbArticle_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _kbarticle_comments?: Kbarticlecomment[] | undefined;
    private _kbArticle_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _kbArticle_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _kbarticle_incidents?: Incident[] | undefined;
    private _kbarticle_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _kbArticle_ProcessSessions?: Processsession[] | undefined;
    private _kbArticle_SharepointDocumentLocation?: Sharepointdocumentlocation[] | undefined;
    private _kbArticle_SyncErrors?: Syncerror[] | undefined;
    private _kbarticleid?: string | undefined;
    private _kbarticletemplateid?: Kbarticletemplate | undefined;
    private _keywords?: string | undefined;
    private _languagecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _number?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subjectid?: Subject | undefined;
    private _title?: string | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _kbarticletemplateid_value property value. 
     * @returns a string
     */
    public get _kbarticletemplateid_value() {
        return this.__kbarticletemplateid_value;
    };
    /**
     * Sets the _kbarticletemplateid_value property value. 
     * @param value Value to set for the _kbarticletemplateid_value property.
     */
    public set _kbarticletemplateid_value(value: string | undefined) {
        this.__kbarticletemplateid_value = value;
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
     * Gets the _subjectid_value property value. 
     * @returns a string
     */
    public get _subjectid_value() {
        return this.__subjectid_value;
    };
    /**
     * Sets the _subjectid_value property value. 
     * @param value Value to set for the _subjectid_value property.
     */
    public set _subjectid_value(value: string | undefined) {
        this.__subjectid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Gets the articlexml property value. 
     * @returns a string
     */
    public get articlexml() {
        return this._articlexml;
    };
    /**
     * Sets the articlexml property value. 
     * @param value Value to set for the articlexml property.
     */
    public set articlexml(value: string | undefined) {
        this._articlexml = value;
    };
    /**
     * Gets the comments property value. 
     * @returns a string
     */
    public get comments() {
        return this._comments;
    };
    /**
     * Sets the comments property value. 
     * @param value Value to set for the comments property.
     */
    public set comments(value: string | undefined) {
        this._comments = value;
    };
    /**
     * Instantiates a new kbarticle and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
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
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Kbarticle)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Kbarticle)._createdonbehalfby_value = n.getStringValue(); },
            "_kbarticletemplateid_value": (o, n) => { (o as unknown as Kbarticle)._kbarticletemplateid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Kbarticle)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Kbarticle)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Kbarticle)._organizationid_value = n.getStringValue(); },
            "_subjectid_value": (o, n) => { (o as unknown as Kbarticle)._subjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Kbarticle)._transactioncurrencyid_value = n.getStringValue(); },
            "articlexml": (o, n) => { (o as unknown as Kbarticle).articlexml = n.getStringValue(); },
            "comments": (o, n) => { (o as unknown as Kbarticle).comments = n.getStringValue(); },
            "content": (o, n) => { (o as unknown as Kbarticle).content = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Kbarticle).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Kbarticle).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Kbarticle).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Kbarticle).description = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Kbarticle).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Kbarticle).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Kbarticle).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Kbarticle).entityimageid = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Kbarticle).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Kbarticle).importsequencenumber = n.getNumberValue(); },
            "kbArticle_Annotation": (o, n) => { (o as unknown as Kbarticle).kbArticle_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "kbArticle_AsyncOperations": (o, n) => { (o as unknown as Kbarticle).kbArticle_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "kbArticle_BulkDeleteFailures": (o, n) => { (o as unknown as Kbarticle).kbArticle_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "kbarticle_comments": (o, n) => { (o as unknown as Kbarticle).kbarticle_comments = n.getCollectionOfObjectValues<Kbarticlecomment>(createKbarticlecommentFromDiscriminatorValue); },
            "kbArticle_DuplicateBaseRecord": (o, n) => { (o as unknown as Kbarticle).kbArticle_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "kbArticle_DuplicateMatchingRecord": (o, n) => { (o as unknown as Kbarticle).kbArticle_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "kbarticle_incidents": (o, n) => { (o as unknown as Kbarticle).kbarticle_incidents = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
            "kbarticle_principalobjectattributeaccess": (o, n) => { (o as unknown as Kbarticle).kbarticle_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "kbArticle_ProcessSessions": (o, n) => { (o as unknown as Kbarticle).kbArticle_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "kbArticle_SharepointDocumentLocation": (o, n) => { (o as unknown as Kbarticle).kbArticle_SharepointDocumentLocation = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "kbArticle_SyncErrors": (o, n) => { (o as unknown as Kbarticle).kbArticle_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "kbarticleid": (o, n) => { (o as unknown as Kbarticle).kbarticleid = n.getStringValue(); },
            "kbarticletemplateid": (o, n) => { (o as unknown as Kbarticle).kbarticletemplateid = n.getObjectValue<Kbarticletemplate>(createKbarticletemplateFromDiscriminatorValue); },
            "keywords": (o, n) => { (o as unknown as Kbarticle).keywords = n.getStringValue(); },
            "languagecode": (o, n) => { (o as unknown as Kbarticle).languagecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Kbarticle).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Kbarticle).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Kbarticle).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "number": (o, n) => { (o as unknown as Kbarticle).number = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Kbarticle).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Kbarticle).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Kbarticle).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Kbarticle).statuscode = n.getNumberValue(); },
            "subjectid": (o, n) => { (o as unknown as Kbarticle).subjectid = n.getObjectValue<Subject>(createSubjectFromDiscriminatorValue); },
            "title": (o, n) => { (o as unknown as Kbarticle).title = n.getStringValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Kbarticle).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "versionnumber": (o, n) => { (o as unknown as Kbarticle).versionnumber = n.getNumberValue(); },
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
     * Gets the kbArticle_Annotation property value. 
     * @returns a annotation
     */
    public get kbArticle_Annotation() {
        return this._kbArticle_Annotation;
    };
    /**
     * Sets the kbArticle_Annotation property value. 
     * @param value Value to set for the KbArticle_Annotation property.
     */
    public set kbArticle_Annotation(value: Annotation[] | undefined) {
        this._kbArticle_Annotation = value;
    };
    /**
     * Gets the kbArticle_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get kbArticle_AsyncOperations() {
        return this._kbArticle_AsyncOperations;
    };
    /**
     * Sets the kbArticle_AsyncOperations property value. 
     * @param value Value to set for the KbArticle_AsyncOperations property.
     */
    public set kbArticle_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._kbArticle_AsyncOperations = value;
    };
    /**
     * Gets the kbArticle_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get kbArticle_BulkDeleteFailures() {
        return this._kbArticle_BulkDeleteFailures;
    };
    /**
     * Sets the kbArticle_BulkDeleteFailures property value. 
     * @param value Value to set for the KbArticle_BulkDeleteFailures property.
     */
    public set kbArticle_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._kbArticle_BulkDeleteFailures = value;
    };
    /**
     * Gets the kbarticle_comments property value. 
     * @returns a kbarticlecomment
     */
    public get kbarticle_comments() {
        return this._kbarticle_comments;
    };
    /**
     * Sets the kbarticle_comments property value. 
     * @param value Value to set for the kbarticle_comments property.
     */
    public set kbarticle_comments(value: Kbarticlecomment[] | undefined) {
        this._kbarticle_comments = value;
    };
    /**
     * Gets the kbArticle_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get kbArticle_DuplicateBaseRecord() {
        return this._kbArticle_DuplicateBaseRecord;
    };
    /**
     * Sets the kbArticle_DuplicateBaseRecord property value. 
     * @param value Value to set for the KbArticle_DuplicateBaseRecord property.
     */
    public set kbArticle_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._kbArticle_DuplicateBaseRecord = value;
    };
    /**
     * Gets the kbArticle_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get kbArticle_DuplicateMatchingRecord() {
        return this._kbArticle_DuplicateMatchingRecord;
    };
    /**
     * Sets the kbArticle_DuplicateMatchingRecord property value. 
     * @param value Value to set for the KbArticle_DuplicateMatchingRecord property.
     */
    public set kbArticle_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._kbArticle_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the kbarticle_incidents property value. 
     * @returns a incident
     */
    public get kbarticle_incidents() {
        return this._kbarticle_incidents;
    };
    /**
     * Sets the kbarticle_incidents property value. 
     * @param value Value to set for the kbarticle_incidents property.
     */
    public set kbarticle_incidents(value: Incident[] | undefined) {
        this._kbarticle_incidents = value;
    };
    /**
     * Gets the kbarticle_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get kbarticle_principalobjectattributeaccess() {
        return this._kbarticle_principalobjectattributeaccess;
    };
    /**
     * Sets the kbarticle_principalobjectattributeaccess property value. 
     * @param value Value to set for the kbarticle_principalobjectattributeaccess property.
     */
    public set kbarticle_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._kbarticle_principalobjectattributeaccess = value;
    };
    /**
     * Gets the kbArticle_ProcessSessions property value. 
     * @returns a processsession
     */
    public get kbArticle_ProcessSessions() {
        return this._kbArticle_ProcessSessions;
    };
    /**
     * Sets the kbArticle_ProcessSessions property value. 
     * @param value Value to set for the KbArticle_ProcessSessions property.
     */
    public set kbArticle_ProcessSessions(value: Processsession[] | undefined) {
        this._kbArticle_ProcessSessions = value;
    };
    /**
     * Gets the kbArticle_SharepointDocumentLocation property value. 
     * @returns a sharepointdocumentlocation
     */
    public get kbArticle_SharepointDocumentLocation() {
        return this._kbArticle_SharepointDocumentLocation;
    };
    /**
     * Sets the kbArticle_SharepointDocumentLocation property value. 
     * @param value Value to set for the KbArticle_SharepointDocumentLocation property.
     */
    public set kbArticle_SharepointDocumentLocation(value: Sharepointdocumentlocation[] | undefined) {
        this._kbArticle_SharepointDocumentLocation = value;
    };
    /**
     * Gets the kbArticle_SyncErrors property value. 
     * @returns a syncerror
     */
    public get kbArticle_SyncErrors() {
        return this._kbArticle_SyncErrors;
    };
    /**
     * Sets the kbArticle_SyncErrors property value. 
     * @param value Value to set for the KbArticle_SyncErrors property.
     */
    public set kbArticle_SyncErrors(value: Syncerror[] | undefined) {
        this._kbArticle_SyncErrors = value;
    };
    /**
     * Gets the kbarticleid property value. 
     * @returns a string
     */
    public get kbarticleid() {
        return this._kbarticleid;
    };
    /**
     * Sets the kbarticleid property value. 
     * @param value Value to set for the kbarticleid property.
     */
    public set kbarticleid(value: string | undefined) {
        this._kbarticleid = value;
    };
    /**
     * Gets the kbarticletemplateid property value. 
     * @returns a kbarticletemplate
     */
    public get kbarticletemplateid() {
        return this._kbarticletemplateid;
    };
    /**
     * Sets the kbarticletemplateid property value. 
     * @param value Value to set for the kbarticletemplateid property.
     */
    public set kbarticletemplateid(value: Kbarticletemplate | undefined) {
        this._kbarticletemplateid = value;
    };
    /**
     * Gets the keywords property value. 
     * @returns a string
     */
    public get keywords() {
        return this._keywords;
    };
    /**
     * Sets the keywords property value. 
     * @param value Value to set for the keywords property.
     */
    public set keywords(value: string | undefined) {
        this._keywords = value;
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
     * Gets the number property value. 
     * @returns a string
     */
    public get number() {
        return this._number;
    };
    /**
     * Sets the number property value. 
     * @param value Value to set for the number property.
     */
    public set number(value: string | undefined) {
        this._number = value;
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
        writer.writeStringValue("_kbarticletemplateid_value", this._kbarticletemplateid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_subjectid_value", this._subjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("articlexml", this.articlexml);
        writer.writeStringValue("comments", this.comments);
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeCollectionOfObjectValues<Annotation>("kbArticle_Annotation", this.kbArticle_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("kbArticle_AsyncOperations", this.kbArticle_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("kbArticle_BulkDeleteFailures", this.kbArticle_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Kbarticlecomment>("kbarticle_comments", this.kbarticle_comments);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("kbArticle_DuplicateBaseRecord", this.kbArticle_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("kbArticle_DuplicateMatchingRecord", this.kbArticle_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Incident>("kbarticle_incidents", this.kbarticle_incidents);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("kbarticle_principalobjectattributeaccess", this.kbarticle_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("kbArticle_ProcessSessions", this.kbArticle_ProcessSessions);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("kbArticle_SharepointDocumentLocation", this.kbArticle_SharepointDocumentLocation);
        writer.writeCollectionOfObjectValues<Syncerror>("kbArticle_SyncErrors", this.kbArticle_SyncErrors);
        writer.writeStringValue("kbarticleid", this.kbarticleid);
        writer.writeObjectValue<Kbarticletemplate>("kbarticletemplateid", this.kbarticletemplateid);
        writer.writeStringValue("keywords", this.keywords);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("number", this.number);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeObjectValue<Subject>("subjectid", this.subjectid);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
     * Gets the subjectid property value. 
     * @returns a subject
     */
    public get subjectid() {
        return this._subjectid;
    };
    /**
     * Sets the subjectid property value. 
     * @param value Value to set for the subjectid property.
     */
    public set subjectid(value: Subject | undefined) {
        this._subjectid = value;
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
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
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
